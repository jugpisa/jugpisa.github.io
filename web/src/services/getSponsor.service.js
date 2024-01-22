const Sponsor = (url, img, name) => {return {url: url, img: img, name: name} };

const getSponsor = () => {
    return [
        Sponsor('https://nextmind.it', '/sponsor/Nextmind.png', 'Nextmind srl'),
        Sponsor('https://unipi.it', '/sponsor/UniPI.png', 'Università di Pisa')
    ]
};

export {getSponsor}