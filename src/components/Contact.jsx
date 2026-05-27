import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Building2, Mail, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { useLanguage } from '../utils/LanguageContext';
import { translations } from '../utils/translations';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: t.services.list[0].title,
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const services = t.services.list.map(s => s.title);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = t.contact.formErrors.name;
    if (!formData.email.trim()) {
      newErrors.email = t.contact.formErrors.emailRequired;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t.contact.formErrors.emailInvalid;
    }
    if (!formData.message.trim()) newErrors.message = t.contact.formErrors.message;
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';

    if (isLocalhost) {
      // Mock submit for local development
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
        setFormData({ name: '', email: '', service: t.services.list[0].title, message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      }, 1500);
      return;
    }

    try {
      const response = await fetch('https://rpm-consult.com/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSuccess(true);
        setFormData({ name: '', email: '', service: t.services.list[0].title, message: '' });
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        let errorMsg = '';
        try {
          const errData = await response.json();
          errorMsg = errData.message || '';
        } catch (e) {}

        const details = `(Status: ${response.status}${errorMsg ? ' - ' + errorMsg : ''})`;
        alert(
          language === 'id'
            ? `Gagal mengirim pesan. ${details}. Silakan coba lagi nanti.`
            : `Failed to send message. ${details}. Please try again later.`
        );
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert(language === 'id' ? 'Terjadi kesalahan koneksi. Silakan coba lagi.' : 'A connection error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-surface-container-low scroll-mt-20" id="contact">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Office Details */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <h2 className="font-extrabold text-primary text-3xl md:text-4xl lg:text-5xl">
                {t.contact.title}
              </h2>
              <div className="h-1.5 w-24 bg-secondary rounded-full" />
              <p className="text-gray-600 max-w-md text-sm md:text-base leading-relaxed pt-2">
                {t.contact.desc}
              </p>
            </div>

            <div className="space-y-8">
              {/* PIK 2 Office */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 shadow-md text-white group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">{t.footer.office1}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    PIK 2 Soho Manhattan Hoek No. 5, Lt. 3 Salembaran Jati, Kosambi, Tangerang, Banten 15214
                  </p>
                </div>
              </div>

              {/* Alam Sutera Office */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0 shadow-md text-white group-hover:scale-105 transition-transform duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">{t.footer.office2}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed mt-1">
                    Ruko The Prominence Blok 38D No. 49-50, Jl. Jalur Sutera Boulevard - Alam Sutera, Tangerang, Banten 15143
                  </p>
                </div>
              </div>

              {/* Communication Links */}
              <div className="flex gap-5 group">
                <div className="w-12 h-12 bg-primary/10 border border-primary/20 rounded-xl flex items-center justify-center shrink-0 text-primary group-hover:scale-105 transition-transform duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-lg">{t.contact.directCall}</h4>
                  <a
                    href="mailto:raka_pm@rpm-consult.com"
                    className="block text-gray-600 hover:text-primary text-sm mt-1 transition-colors font-medium"
                  >
                    raka_pm@rpm-consult.com
                  </a>
                  <a
                    href="tel:+6281286866654"
                    className="block text-gray-600 hover:text-primary text-sm transition-colors font-medium"
                  >
                    0812 8686 6654
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-primary/5 relative overflow-hidden"
          >
            {/* Form Success Animation Overlay */}
            <AnimatePresence>
              {isSuccess && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-white z-20 flex flex-col items-center justify-center text-center p-6"
                >
                  <motion.div
                    initial={{ scale: 0.3, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: 'spring', damping: 12 }}
                  >
                    <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-extrabold text-primary mb-2">{t.contact.formSuccessTitle}</h3>
                  <p className="text-gray-500 text-sm max-w-sm">
                    {t.contact.formSuccessDesc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <div className="input-group">
                    <input
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder=" "
                      className={`custom-input ${errors.name ? 'border-error' : ''}`}
                      autoComplete="off"
                    />
                    <label className="user-label">{t.contact.formLabels.name}</label>
                  </div>
                  {errors.name && <p className="text-xs text-error font-medium pl-1">{errors.name}</p>}
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <div className="input-group">
                    <input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder=" "
                      className={`custom-input ${errors.email ? 'border-error' : ''}`}
                      autoComplete="off"
                    />
                    <label className="user-label">{t.contact.formLabels.email}</label>
                  </div>
                  {errors.email && <p className="text-xs text-error font-medium pl-1">{errors.email}</p>}
                </div>

              </div>

              {/* Service Selection */}
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 pl-1">
                  {t.contact.formLabels.service}
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border border-outline-variant focus:border-primary rounded-lg py-[0.85rem] px-4 outline-none text-sm transition-all font-medium text-gray-700 cursor-pointer"
                >
                  {services.map((svc) => (
                    <option key={svc} value={svc}>
                      {svc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="space-y-1">
                <div className="input-group">
                  <textarea
                    required
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    placeholder=" "
                    className={`custom-input resize-none h-32 ${errors.message ? 'border-error' : ''}`}
                  />
                  <label className="user-label">{t.contact.formLabels.message}</label>
                </div>
                {errors.message && <p className="text-xs text-error font-medium pl-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-primary text-white font-bold py-4 rounded-md shadow-lg shadow-primary/25 hover:bg-primary-container disabled:bg-primary/50 hover:scale-[1.01] active:scale-98 transition-all duration-300 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t.contact.formSubmitting}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4.5 h-4.5" />
                    <span>{t.contact.formSubmit}</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
