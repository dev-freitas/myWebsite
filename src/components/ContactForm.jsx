import emailjs from 'emailjs-com'

function ContactForm() {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         message: ''
//       })

//       const {name, email, phone, message} = formData;

      // const onChange = (e) => {
      //   setFormData((prevState) => ({
      //     ...prevState,
      //     [e.target.id]: e.target.value,
      //   }))
      // };


      const handleEmail = async (e) => {
        e.preventDefault();

        emailjs.sendForm('service_3s3ip08', 'template_1uahw9r', e.target, 'oCevdRnvvsh-VZu47')
        .then(function(response) {
          alert('Thank you for your message', response.status, response.text);
       }, function(error) {
          console.log('FAILED...', error);
       });
      }

  return (
    <form onSubmit={handleEmail}>
            <div className="input-layout">
            <label htmlFor="">Name</label>
            <input 
            type="text"  
            id='name' 
            name= 'name' 
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <label htmlFor="">Email</label>
            <input 
            type="email"  
            id='email' 
            name='email' 
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <label htmlFor="">Contact Number</label>
            <input 
            type="text"  
            id='phone' 
            name='phone' 
            // onChange={onChange}
            />
            </div>
            <div className="input-layout">
            <label htmlFor="">Your message</label>
            <textarea type="text"  
            id='message' 
            name='message' 
            // onChange={onChange} 
            cols="30" 
            rows="10"></textarea>
            </div>
            <button>Send</button>
        </form>
  )
}

export default ContactForm
