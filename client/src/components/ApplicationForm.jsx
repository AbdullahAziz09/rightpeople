import { useState } from "react";
import { UploadCloud, CheckCircle2, Loader2 } from "lucide-react";
import { submitApplication } from "../lib/api";

export default function ApplicationForm({ job }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "", coverNote: "" });
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setError("");
    try {
      const data = new FormData();
      data.append("name", form.name);
      data.append("email", form.email);
      data.append("phone", form.phone);
      data.append("coverNote", form.coverNote);
      data.append("jobTitle", job.title);
      data.append("jobId", job.id);
      if (file) data.append("resume", file);
      await submitApplication(data);
      setStatus("success");
      setForm({ name: "", email: "", phone: "", coverNote: "" });
      setFile(null);
    } catch (err) {
      setError(err.message);
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl bg-white p-10 text-center shadow-card ring-1 ring-ink-100">
        <CheckCircle2 className="text-brand-600" size={48} />
        <h3 className="mt-5 text-xl font-bold text-ink-900">Application Sent</h3>
        <p className="mt-2 max-w-sm text-sm text-ink-500">
          Thanks for applying to {job.title}. Our team will review your
          profile and reach out if there's a fit.
        </p>
        <button onClick={() => setStatus("idle")} className="btn-secondary mt-8">
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-2xl bg-white p-8 shadow-card ring-1 ring-ink-100"
    >
      <input
        required
        name="name"
        placeholder="Full Name"
        className="input"
        value={form.name}
        onChange={handleChange}
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <input
          required
          type="email"
          name="email"
          placeholder="Email Address"
          className="input"
          value={form.email}
          onChange={handleChange}
        />
        <input
          required
          name="phone"
          placeholder="Phone"
          className="input"
          value={form.phone}
          onChange={handleChange}
        />
      </div>
      <textarea
        name="coverNote"
        placeholder="Tell us briefly why you're a good fit (optional)"
        rows={4}
        className="input resize-none"
        value={form.coverNote}
        onChange={handleChange}
      />

      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-ink-300 px-4 py-4 text-sm text-ink-500 hover:border-brand-400 hover:bg-brand-50/50">
        <UploadCloud size={20} className="shrink-0 text-brand-600" />
        <span className="truncate">
          {file ? file.name : "Upload your CV / Resume (PDF, DOC)"}
        </span>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          className="hidden"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
        />
      </label>

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button type="submit" disabled={status === "loading"} className="btn-primary w-full">
        {status === "loading" ? (
          <>
            <Loader2 size={16} className="animate-spin" /> Submitting...
          </>
        ) : (
          "Submit Application"
        )}
      </button>
    </form>
  );
}
