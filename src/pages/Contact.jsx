import './../styles/contact.css'

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <div className='contact__container'>
          <div className='form__container'>
            <h1 className='contact__title'>Lets chat.<br />
              tell me about <br /> your rituals.</h1>
            <p className='contact__text'>Or leave a review for on of our products. Or leave a review for on of our products.Or leave a review for on of our products.</p>
          </div>
          <div className='form__container'>
            <h2 className='contact__subtitle'>Send us a message</h2>
            <p className='contact__text'>Or leave a review for on of our products.</p>
            <form>
              <div className='input__container'>
                <input className='form__input' placeholder='Full name' type="text" name="fullname" required />
              </div>
              <div className='input__container'>
                <input placeholder='Email address' className='form__input' type="email" name="email" required />
              </div>
              <div className='input__container'>
                <input className='form__input' type="text" name="subject" required  placeholder='Subject'/>
              </div>
              <div className='input__container'>
                <textarea className='form__message' name="message" required></textarea>
              </div>
              <button className='form__send' type="submit">Send message</button>
            </form>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact