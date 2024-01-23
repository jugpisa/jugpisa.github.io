import {useState} from 'react';

export default function ContactForm(props) {
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
                <div className="mt-2 flex gap-x-10">
                    <div>
                        <label htmlFor="name" className="raleway block text-sm font-medium leading-6 text-gray-900">Nome completo</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400 sm:max-w-md">
                            <input type="text" name="name" id="name" className="focus:drop-shadow-lg block flex-1 border-0 rounded-md bg-white  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Mario Rossi"/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email" className="raleway block text-sm font-medium leading-6 text-gray-900">E-mail</label>
                        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue-400 sm:max-w-md">
                            <input type="text" name="email" id="email" className="focus:drop-shadow-lg block flex-1 border-0 rounded-md bg-white  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="mario@rossi.it"/>
                        </div>
                    </div>
                </div>

                
                <div class="mt-2 flex">
                    <div class="flex-1">
                        <label for="provincia" class="raleway block text-sm font-medium leading-6 text-gray-900">Dove</label>
                        {/* TODO: trovare il modo di aggiustare il padding interno del select */}
                        <select id="provincia" name="provincia" 
                        class="block bg-white w-full flex-1 rounded-md border-0 py-1.5 text-gray-900 shadow-md ring-0 ring-inset 
                            ring-gray-300 focus:ring-1 focus:ring-inset focus:ring-blue-400
                            sm:max-w-xs sm:text-sm sm:leading-6">
                            {/* TODO: map options */}
                            <option>Placeholder</option>
                        </select>
                    </div>
                </div>
                
                <div className="flex flex-col">
                    <div className="mt-2 flex-1">
                        <label htmlFor="about" className="raleway block text-sm font-medium leading-6 text-gray-900">Messaggio</label>
                        <textarea id="about" name="about" rows="3" className="focus:drop-shadow-lg block w-full flex-1 rounded-md bg-white border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
                        focus:ring-0 focus:ring-inset focus:ring-blue-400 sm:text-sm sm:leading-6"></textarea>
                    </div>
                </div>
                <button class="self-center mt-4 border-blue-700 border-2 bg-blue-400 text-white hover:bg-pink-500 hover:border-purple-600 hover:text-black text-grey-darkest font-bold py-2 px-4 gap-x-1 rounded-lg inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" class="main-grid-item-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <line x1="22" x2="11" y1="2" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                    </svg>
                    <span>Invia</span>
                </button>
            </div> 
        </form>
    );
}