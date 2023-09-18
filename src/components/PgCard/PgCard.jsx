import React from 'react'

export const PgCard = ({
    heading = "",
    description = "",
    label = null,
    langCards = [],
    dataLable = "March 2023 — Sept 2023",
    coverImg = null,
    cardType = "",
}) => {
    return (
        <div>

            <div className={`pg-card ${cardType === "project" ? "pg-card--project" : ""}`}>
            <div className="pg-card-inset"></div>
                <header className="pg-card__header ">

                    {coverImg ?
                        <img src={coverImg} alt=""
                            loading='lazy'
                            decoding='async'
                            height="48"
                            width="200"
                        /> :
                        dataLable
                    }

                </header>
                <div className="pg-card__body">
                    <h3>{heading} </h3>
                    {label
                        ? <h4>{label}</h4>
                        : null}
                    <p>
                        {description}
                    </p>

                    <div className='pg-card__lower-list'>

                        {langCards.map((value, index) =>
                            <div className="lang-card" key={index}>{value || "Foo"}</div>
                        )}


                    </div>
                </div>
            </div>

        </div>
    )
}
