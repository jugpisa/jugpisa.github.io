import {useState} from 'react';

export default function ContactForm(props) {
    //TODO: add email validation
    //TODO: add check on privacy flag
    const [emailIsValid, setEmailIsValid] = useState(true);
    const _target = {url: "https://nocodeform.io/f/65aee88fecf440303633f6d8", method: "POST"};

    const redirectURL = props.redirectURL;

    function submit(event) {
        event.preventDefault();
        if(emailIsValid) {
            const formData = new FormData(event.target);
            fetch(_target.url, 
            {
                method: _target.method,
                body: formData,
            })
            .then(() => {window.location.replace(redirectURL)});
        }
    }

    return (
        <form onSubmit={submit}>
            <div className="flex flex-col">
                <div className="mt-2 flex flex-col">
                    <div>
                        <label htmlFor="name" className="raleway block text-sm font-medium leading-6 text-gray-900">Nome completo</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400 sm:max-w-md">
                            <input type="text" name="name" id="name" className="focus:drop-shadow-lg block flex-1 border-0 rounded-md bg-zinc-200  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Mario Rossi"/>
                        </div>
                    </div>
                </div>
                
                <div className="my-2 flex flex-col">
                    <div>
                        <label htmlFor="email" className="raleway block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400 sm:max-w-md">
                            <input type="text" name="email" id="email" className="focus:drop-shadow-lg block flex-1 border-0 rounded-md bg-zinc-200  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="mario@rossi.it"/>
                        </div>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <div className="mt-2 flex-1">
                        <label htmlFor="about" className="raleway block text-sm font-medium leading-6 text-gray-900">Messaggio</label>
                        <textarea id="about" name="about" rows="3" className="focus:drop-shadow-lg block w-full flex-1 rounded-md bg-zinc-200 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                        focus:ring-0 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>

                <div className="my-2 flex flex-col">
                    <div className="raleway flex gap-x-1">
                        <input type="checkbox" name="privacy" id="privacy" />
                        <div className="text-xs">Ho letto l'<span className="underline text-blue-700"><a href="/privacy">informativa sulla privacy</a></span> ed acconsento al trattamento dei miei dati</div>
                    </div>
                </div>

                <button className="self-center mt-4 border-blue-700 border-2 bg-blue-400 text-white hover:bg-pink-500 hover:border-purple-600 hover:text-black text-grey-darkest font-bold py-2 px-4 gap-x-1 rounded-lg inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" className="main-grid-item-icon" fill="none" stroke="currentColor">
                        <line x1="22" x2="11" y1="2" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>Invia</span>
                </button>
            </div> 
        </form>
    );
}