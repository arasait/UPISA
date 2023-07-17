import img1 from 'src/assets/cerdo/1.png'
import img2 from 'src/assets/cerdo/2.png'
import img3 from 'src/assets/cerdo/3.png'
import img4 from 'src/assets/cerdo/4.png'
import img5 from 'src/assets/cerdo/5.png'
import img6 from 'src/assets/cerdo/6.png'

const MyApp = () => {

    const data= [
        {
            img:img1,
            titulo:"Facilita la digestión",
            text:"La carne de cerdo permite mejorar tu digestión y, además, ayuda al funcionamiento normal del sistema inmune. Esto quiere decir que, al terminar de comer, no sentirás esa pesadez que, en ciertas ocasiones, te invade."
        }
    ]

    return (
        <article class="container mt-16 mb-20 ">

            <div class="flex justify-center">
                <p class="text-center">
                    La carne de cerdo es un alimento sumamente versátil y delicioso que ofrece una amplia variedad de beneficios para aquellos que la consumen. A continuación, se presentan algunas de las razones por las cuales incluir carne de cerdo en nuestra dieta puede ser beneficioso:
                </p>
            </div>


            <div id="novedades" class="grid grid-cols-1 mt-6 gap-6 md:grid-cols-3">

              
                <div class="card text-black h-auto ">
                    <img class="rounded-t-xl object-center h-[200px] md:h-[300px] lg:h-[423px] w-full object-cover"
                        src="{% static 'imgs/cerdo/6.png' %}" alt="" />
                        <div class="p-5 md:p-9">
                            <h3 class="uppercase">Facilita la digestión</h3>
                            <p>
                                La carne de cerdo permite mejorar tu digestión y, además, ayuda al funcionamiento normal del sistema inmune. Esto quiere decir que, al terminar de comer, no sentirás esa pesadez que, en ciertas ocasiones, te invade.
                            </p>
                        </div>
                </div>




            </div>






            <div class="flex">
                <a href="{% url 'recetas' %}" class="btn cursor-pointer secondary z-50 mt-16 flex items-center gap-2">
                    <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15.8125 7.00011C15.8125 7.24875 15.7137 7.48721 15.5379 7.66302C15.3621 7.83884 15.1236 7.93761 14.875 7.93761H3.39063L7.41563 11.9618C7.59175 12.138 7.6907 12.3768 7.6907 12.6259C7.6907 12.875 7.59175 13.1138 7.41563 13.29C7.23951 13.4661 7.00064 13.565 6.75157 13.565C6.5025 13.565 6.26363 13.4661 6.08751 13.29L0.462507 7.66496C0.375107 7.57786 0.30576 7.47437 0.258442 7.36041C0.211125 7.24646 0.186768 7.12428 0.186768 7.00089C0.186768 6.87751 0.211125 6.75533 0.258442 6.64138C0.30576 6.52742 0.375107 6.42393 0.462507 6.33683L6.08751 0.711831C6.17471 0.624625 6.27824 0.55545 6.39218 0.508254C6.50612 0.461059 6.62824 0.436768 6.75157 0.436768C6.8749 0.436768 6.99702 0.461059 7.11096 0.508254C7.2249 0.55545 7.32843 0.624625 7.41563 0.711831C7.50284 0.799037 7.57201 0.902566 7.61921 1.01651C7.6664 1.13045 7.6907 1.25257 7.6907 1.37589C7.6907 1.49922 7.6664 1.62134 7.61921 1.73528C7.57201 1.84922 7.50284 1.95275 7.41563 2.03996L3.39063 6.06261H14.875C15.1236 6.06261 15.3621 6.16138 15.5379 6.3372C15.7137 6.51301 15.8125 6.75147 15.8125 7.00011Z"
                            fill="white" />
                    </svg>
                    volver
                </a>
            </div>

        </article>
    )
}

export default MyApp