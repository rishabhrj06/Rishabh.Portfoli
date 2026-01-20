import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import Button from '@/Components/Button'
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "rishabhprasadsingh075@gmail.com",
    href: "mailto:rishabhprasadsingh075@gmail.com"
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 73405-53614",
    href: "tel:+917340553614",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Rajasthan, India",
    href: "#"
  }
]

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: ""
  }); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    setSubmitStatus({type: null, message: ""});
    try{
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;  
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if(!serviceId || !templateId || !publicKey){
        throw new Error("EmailJS environment variables are not set properly.");
      }

      await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        message: formData.message
      }, publicKey);

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully!"
      });
      setFormData({name: "", email: "", message: ""});

    }catch(error){
      console.error("Error sending message:", error);
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later."
      })
    }finally{
      setIsLoading(false);
    }
  }

  return (
    <section id="cts" className='overflow-hidden py-32 relative'>
      <div className='absolute top-0 left-0 w-full h-full'>
        <div className='absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2'/>
        <div className='absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl'/>
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        
        <div className='flex items-center justify-center'>
        <div className='max-w-3xl text-center mb-16'>
          <span className='text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in'>Get In Touch</span>
          <h2 className='text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground'>Let's build <span className='font-serif italic font-normal text-white'>something meaningful.</span></h2>
          <p className='text-sm text-muted-foreground animate-fade-in animation-delay-200'>Have an idea, a project, or an opportunity in mind? I’m always open to discussing development work, internships, collaborations, or learning-focused projects. Feel free to reach out — I usually respond within 24 hours..</p>
        </div>
        </div>

        <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'> 
          <div className='glass p-8 rounded-3xl border border-primary/30 animate-fade-in animation-delay-300'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor='name' className='block text-sm font-medium mb-2'>Name</label>
                <input id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                type='text'
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                required
                placeholder='Your name...'
                />
              </div>

               <div>
                <label htmlFor='email' className='block text-sm font-medium mb-2'>Email</label>
                <input
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                id="email"
                type='email'
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all'
                required
                placeholder='your@email.com'                
                />
              </div>

               <div>
                <label htmlFor='message' className='block text-sm font-medium mb-2'>Message</label>
                <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                rows={5}
                id="message"
                type='text'
                className='w-full px-4 py-3 bg-surface rounded-xl border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none'
                required
                placeholder='Your message...'
                />
              </div>

              <Button type='submit' className='w-full' disabled={isLoading}>
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className='w-5 h-5 ml-2'/>
                 </>
                 )
                }
              </Button>

              {submitStatus.type && (
                <div 
                  className={`mt-4 flex items-center space-x-2 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-500"
                      : "bg-red-500/10 border border-red-500/20 text-red-500"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                      <CheckCircle className='w-5 h-5 flex-shrink-0' />
                    ) : (
                      <AlertCircle className='w-5 h-5 flex-shrink-0' />
                  )}
                  <p className='text-sm'>{submitStatus.message}</p>
              </div>
              )}
            </form>
          </div>

          
          <div className="space-y-6 animate-fade-in animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contacts.map((contact, id) => (
                  <a
                    key={id}
                    href={contact.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {contact.label}
                      </div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Currently Available</span>
              </div>
              <p className="text-muted-foreground text-sm">
                I'm currently open to new opportunities and exciting projects.
                Whether you need a full-time engineer or a freelance consultant,
                let's talk!
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact