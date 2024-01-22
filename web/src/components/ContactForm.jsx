//TODO: aggiornare con form con stili di Tailwind CSS 
//! https://tailwindui.com/components/application-ui/forms/form-layouts

export default function ContactForm(props) {
    const _target = {url: "https://nocodeform.io/f/65aee88fecf440303633f6d8", method: "POST"};

    const redirectURL = props.redirectURL;

    async function submit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const response = await fetch(_target.url, 
        {
            method: _target.method,
            body: formData,
        });
        
        window.location.replace(redirectURL);
    }

    return (
        <form onSubmit={submit}>
            <label htmlFor="name">
                Nome completo:
                <input type="text" name="name" />
            </label>
            <label htmlFor="email">
                Email:
                <input type="email" name="email" />
            </label>
            <label htmlFor="text">
                Messaggio:
                <textarea name="text" rows="4" cols="10"/>
            </label>
            <button>Invia</button>
        </form>
    );
}