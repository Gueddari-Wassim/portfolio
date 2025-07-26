import { Linkedin, Mail, MapPin, Phone, Send, Twitter, TwitterIcon, X } from 'lucide-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import cn from '../lib/utils';
import emailjs from "@emailjs/browser";
import { useState } from 'react'

export default function ContactSection() {

const [formData, setFormData] = useState({
  name: "",
  email: "",
  message: "",
});

const [formStatus, setFormStatus] = useState({
  submitting:false,
  success:false,
  error:false,
  message:"",
});

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
    submitting: true,
    success: false,
    error: false,
    message: "",
    });
    try{
        await emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
        name: formData.name,
        email: formData.email,
        message: formData.message,
    },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

        setFormStatus({
            submitting: false,
            success: true,
            error: false,
            message: "Message Sent successfully !",
        });
        setFormData({
          name:"",
          email:"",
          message:"",  
        })

    }catch(error){
        setFormStatus({
            submitting: false,
            success: false,
            error: true,
            message: "Failed To Send Message Please Try Again !",
        })
    }
};



  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
        <div className='container mx-auto max-w-5xl'>
            <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
            Get In <span className='text-primary'>Touch</span>
            </h2>
            <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
                Have a project in mind or wand to collaborate ? Feel free to
                reach out I'm always open to discussing new opportunities
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-8'>
                    <h3 className='text-2xl font-semibold mb-6'>Contact Inforamtion</h3>
                    <div className='space-y-6 justify-center'>
                        {/* section1 */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary10'>
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Email</h4>
                                <a href="mailto:wassimgueddari13@gmail.com" 
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    wassimgueddari13@gmail.com
                                </a>
                            </div>
                        </div>
                        {/* section2 */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary10'>
                                <Phone className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Phone</h4>
                                <a href="tel:+21621501474" 
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    +216 21501474
                                </a>
                            </div>
                        </div>
                         {/* section3 */}
                        <div className='flex items-start space-x-4'>
                            <div className='p-3 rounded-full bg-primary10'>
                                <MapPin className='h-6 w-6 text-primary'/>
                            </div>
                            <div>
                                <h4 className='font-medium'>Location</h4>
                                <a href="https://www.google.com/maps/place/Sousse" 
                                    target='_blank'
                                    className='text-muted-foreground hover:text-primary transition-colors'>
                                    Sousse,Tunisia
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8 '>
                        <h4 className='font-medium mb-4'>Connect With Me</h4>
                        <div className='flex space-x-4 justify-center'>
                            <a href="https://www.linkedin.com/in/wassim-gueddari"
                                target='_blank'>
                                <Linkedin/>
                            </a>
                            <a href="https://www.x.com/in/wassim gueddari"
                                target='_blank'>
                                <FontAwesomeIcon icon={faXTwitter} style={{ fontSize: '23px' }} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='bg-card p-8 rounded-lg shadow-xs'>
                    <h3 className='text-2xl font-semibold mb-6'>
                        Send A Message
                    </h3>
                    <form action="" className='space-y-6' onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor='name'
                            className='block text-sm font-medium mb-2'>
                                Your Name
                            </label>
                            <input type="text" id='name' name='name'required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='name'
                                    onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor='email'
                            className='block text-sm font-medium mb-2'>
                                Your Email
                            </label>
                            <input type="email" id='email' name='email'required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                                    placeholder='youremail@email.com'
                                    onChange={handleInputChange}
                            />
                        </div>

                        <div>
                            <label htmlFor='message'
                            className='block text-sm font-medium mb-2'>
                                Your Message
                            </label>
                            <textarea id='message' name='message' required
                                    className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                                    placeholder='message'
                                    onChange={handleInputChange}
                            />
                        </div>
                        <button
                            type='submit'
                            className={cn('cosmic-button w-full flex items-center justify-center gap-2',
                            )}
                            disabled={formStatus.submitting}
                        >
                            <Send size={16}/>
                            {formStatus.submitting?"Sending...":"Send Message"}

                        </button>
                        {formStatus.message&&(
                            <div className='font-semibold '>
                                {formStatus.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}
