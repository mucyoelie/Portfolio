import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import emailjs from 'emailjs-com';

interface ContactProps {
  isSidebarOpen: boolean;
}

const Contact: React.FC<ContactProps> = ({ isSidebarOpen }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        "YOUR_PUBLIC_KEY"
      );

      if (response.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800  bg-slate-50 flex justify-center items-center">
      <div
        className={`transition-all duration-300 p-4 md:p-6 w-full flex justify-center items-center ${
          isSidebarOpen ? 'md:ml-64' : 'md:ml-20'
        }`}
      >
        <div className="w-full max-w-6xl  shadow-2xl rounded-sm overflow-hidden dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800  bg-slate-50">
          <div className="grid md:grid-cols-5 gap-0">

            {/* LEFT SIDE — INFO */}
            <div className="md:col-span-2 dark:bg-gradient-to-br dark:from-gray-900 dark:via-black dark:to-gray-800  bg-slate-50 text-white p-8 md:p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-3">Get In Touch</h2>
                <p className="text-blue-100 mb-8">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-blue-100 text-sm">
                        123 Business Street<br />Kigali, Rwanda
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-blue-100 text-sm">+250 788 123 456</p>
                      <p className="text-blue-100 text-sm">+250 788 654 321</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-blue-100 text-sm">info@yourcompany.com</p>
                      <p className="text-blue-100 text-sm">support@yourcompany.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-orange-500 p-3 rounded-lg">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Available Hours</h3>
                      <p className="text-blue-100 text-sm">Mon–Fri: 8AM - 6PM</p>
                      <p className="text-blue-100 text-sm">Sat: 9AM - 4PM</p>
                      <p className="text-blue-100 text-sm">Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-orange-500">
                <p className="text-sm text-blue-100">Follow us on social media for updates</p>
              </div>
            </div>

            {/* RIGHT SIDE — FORM */}
            <div className="md:col-span-3 p-8 md:p-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Send us a Message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you shortly
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none min-h-[150px] resize-none transition"
                    placeholder="Write your message here..."
                  ></textarea>
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-xl">
                    Message sent successfully! We'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-xl">
                    Something went wrong. Please try again.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
