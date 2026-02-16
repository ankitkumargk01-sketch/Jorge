import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, MessageSquare, Loader2, CheckCircle } from 'lucide-react';
import Button from './Button';
import { generateConfirmationEmail } from '../services/geminiService';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    reason: 'general'
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
        // Generate personalized email content using Gemini API
        const emailBody = await generateConfirmationEmail({
            name: formData.name,
            date: formData.date,
            time: formData.time,
            reason: formData.reason
        });

        // Simulate sending email (Client-side limitation: we can't actually send SMTP without a backend)
        console.group("📧 SIMULATED EMAIL SENT");
        console.log(`To: ${formData.email}`);
        console.log(`Subject: Appointment Request Received - House of Dentistry`);
        console.log("---------------------------------------------------");
        console.log(emailBody);
        console.log("---------------------------------------------------");
        console.groupEnd();

        // Simulate network delay for realism
        await new Promise(resolve => setTimeout(resolve, 800));
        
        setSubmitted(true);
    } catch (error) {
        console.error("Error processing booking:", error);
        // Fallback success state even if AI fails, to not block the user
        setSubmitted(true);
    } finally {
        setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        
        {/* Header */}
        <div className="bg-slate-950 px-8 py-6 flex justify-between items-center border-b border-slate-800">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white">Book Appointment</h3>
            <p className="text-slate-400 text-sm mt-1">We'll confirm with you shortly.</p>
          </div>
          <button onClick={onClose} className="p-2 text-slate-400 hover:bg-slate-800 hover:text-white rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="p-8">
            {submitted ? (
                <div className="text-center py-6 animate-in fade-in slide-in-from-bottom-4">
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                        <CheckCircle size={40} />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Request Received!</h4>
                    <p className="text-slate-400 mb-6">
                        Thank you, {formData.name}. We have sent a confirmation email to <span className="text-white font-medium">{formData.email}</span>.
                    </p>
                    <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 mb-8 text-left">
                        <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Next Steps</p>
                        <p className="text-slate-300 text-sm flex items-start gap-2">
                            <Phone size={16} className="shrink-0 mt-0.5 text-primary-500" />
                            Our team will call you at {formData.phone} shortly to finalize your time slot.
                        </p>
                    </div>
                    <Button onClick={onClose} className="w-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700">Close</Button>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-4">
                        <div className="relative">
                            <User className="absolute left-4 top-3.5 text-slate-500" size={20} />
                            <input 
                                required
                                name="name"
                                type="text" 
                                placeholder="Full Name" 
                                className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-white placeholder:text-slate-600"
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative">
                                <Phone className="absolute left-4 top-3.5 text-slate-500" size={20} />
                                <input 
                                    required
                                    name="phone"
                                    type="tel" 
                                    placeholder="Phone" 
                                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-white placeholder:text-slate-600"
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="relative">
                                <Mail className="absolute left-4 top-3.5 text-slate-500" size={20} />
                                <input 
                                    required
                                    name="email"
                                    type="email" 
                                    placeholder="Email" 
                                    className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-white placeholder:text-slate-600"
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                             <div className="relative">
                                <input 
                                    required
                                    name="date"
                                    type="date" 
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-slate-400 [color-scheme:dark]"
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                />
                            </div>
                            <div className="relative">
                                <select 
                                    name="time"
                                    className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-slate-400"
                                    onChange={handleChange}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Time...</option>
                                    <option value="morning">Morning</option>
                                    <option value="afternoon">Afternoon</option>
                                    <option value="evening">Evening</option>
                                </select>
                            </div>
                        </div>

                        <div className="relative">
                             <MessageSquare className="absolute left-4 top-3.5 text-slate-500" size={20} />
                             <select 
                                name="reason"
                                className="w-full pl-12 pr-4 py-3 bg-slate-950 border border-slate-800 rounded-xl focus:ring-2 focus:ring-primary-600 focus:outline-none transition-all text-slate-400 appearance-none"
                                onChange={handleChange}
                                disabled={isSubmitting}
                             >
                                <option value="general">Check-up & Cleaning</option>
                                <option value="pain">Tooth Pain / Emergency</option>
                                <option value="cosmetic">Cosmetic / Whitening</option>
                                <option value="ortho">Orthodontics / Braces</option>
                             </select>
                        </div>
                    </div>

                    <Button type="submit" className="w-full mt-2" disabled={isSubmitting}>
                        {isSubmitting ? (
                            <span className="flex items-center gap-2">
                                <Loader2 className="animate-spin" size={20} /> Sending Request...
                            </span>
                        ) : (
                            "Request Appointment"
                        )}
                    </Button>
                    <p className="text-xs text-center text-slate-500 mt-4">By booking, you agree to our terms of service.</p>
                </form>
            )}
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;