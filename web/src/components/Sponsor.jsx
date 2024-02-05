import {useState} from 'react';

const getGridSize = (numberOfElements) => {
    if(numberOfElements > 2 && numberOfElements % 4 == 0) return 4;
    if(numberOfElements % 2 == 0) return 2;
    else return numberOfElements > 2 ? 3 : 1;
}

const Sponsor = ({sponsors}) => {
    const [gridSize, setGridSize] = useState(getGridSize(sponsors.length));

    return (
        <section className="py-base container">
            <div className={`grid gap-x-8 grid-cols-2 md:gap-y-16 md:grid-cols-${gridSize}`}>
                {sponsors.length > 0 && sponsors.map(sponsor => 
                    <a key={sponsor.name} href={sponsor.url} target="_blank">
                        <img src={sponsor.img} className="grayscale" />
                    </a>    
                )}
            </div>
        </section>
    );
}

export default Sponsor;