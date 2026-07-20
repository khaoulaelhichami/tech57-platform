export default function Contact() {
  return (
    <div className="container my-5" style={{ maxWidth: 500 }}>
      <h2 className="mb-4">Contactez-nous</h2>
      <form>
        <input className="form-control mb-2" placeholder="Nom" />
        <input type="email" className="form-control mb-2" placeholder="Email" />
        <textarea className="form-control mb-3" rows={4} placeholder="Message" />
        <button className="btn btn-tech57 w-100" type="submit">Envoyer</button>
      </form>
    </div>
  );
}
