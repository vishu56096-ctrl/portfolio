const myEmail = 'vishalguptajnu925@gmail.com';

const contactLinks = [
  { label: 'Email', value: myEmail, href: `mailto:${myEmail}` },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/vishal-kumar-7a4003393/', href: 'https://www.linkedin.com/in/vishal-kumar-7a4003393/' },
  { label: 'GitHub', value: 'https://github.com/vishu56096-ctrl', href: 'https://github.com/vishu56096-ctrl' },
  { label: 'Twitter/X', value: 'https://x.com/vishu_01011', href: 'https://x.com/vishu_01011' },
];

function Contact() {
  const redirectUrl = `${window.location.origin}/#home`;

  return (
    <section className="section bg-light-gray" id="contact">
      <div className="container">
        <div className="section-heading">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let's build something useful</h2>
        </div>

        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-panel h-100">
              {contactLinks.map((item) => (
                <div className="contact-item" key={item.label}>
                  <span>{item.label}</span>
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {item.value}
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div className="col-lg-7">
            <form className="contact-form" action={`https://formsubmit.co/${myEmail}`} method="POST">
              <input type="hidden" name="_subject" value="New portfolio contact message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={redirectUrl} />
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                  <input className="form-control" id="name" name="name" type="text" placeholder="Your name" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label" htmlFor="email">
                    Email
                  </label>
                  <input className="form-control" id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="col-12">
                  <label className="form-label" htmlFor="message">
                    Message
                  </label>
                  <textarea className="form-control" id="message" name="message" rows="5" placeholder="Write your message" required />
                </div>
                <div className="col-12">
                  <button className="btn btn-primary" type="submit">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
