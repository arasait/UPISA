const HeaderCarrusel = () => {

    const source = [
        {
            desktop: "src/assets/homeCarrusel/banner-desktop.png",
            movil: "src/assets/homeCarrusel/banner-movil.png",
        },

    ]

    return (
        <div className="-mb-10 -mt-24">

            <div className="carrusel-slider ">

                {source.map((v, k) => (

                    <div className="slider ">
                        <picture className="item-slider relative">
                            <source srcset={v.desktop} media="(min-width: 750px)" />
                            <img className="w-full object-cover h-[22.5rem] lg:h[849px] md:h-auto" src={v.movil} alt="" />

                        </picture>
                    </div>
                ))}

            </div>
        </div>

    )
}

export default HeaderCarrusel