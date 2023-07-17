

const Card = ({ data }) => {
    return (
        <a className="bg-white flex flex-col  rounded-lg text-black w-auto  "
            href="#">
            <img className="rounded-t-xl max-h-80  h-full w-full object-cover" src={data.portada} alt="" />

            <div className="p-5 md:p-9 mt-auto">

                <h3 className="uppercase">{data.titulo}</h3>
                <div className="flex gap-6 mt-5 ">

                    <div class="flex gap-6 mt-5 ">

                        <div class="flex items-center gap-[10px]">
                            <i>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 0.5625C7.33122 0.5625 5.69992 1.05735 4.31238 1.98448C2.92484 2.9116 1.84338 4.22936 1.20477 5.77111C0.566156 7.31286 0.399065 9.00936 0.724628 10.6461C1.05019 12.2828 1.85379 13.7862 3.03379 14.9662C4.2138 16.1462 5.71721 16.9498 7.35393 17.2754C8.99064 17.6009 10.6871 17.4338 12.2289 16.7952C13.7706 16.1566 15.0884 15.0752 16.0155 13.6876C16.9427 12.3001 17.4375 10.6688 17.4375 9C17.4354 6.76287 16.5458 4.61796 14.9639 3.03607C13.382 1.45418 11.2371 0.564569 9 0.5625ZM9 15.5625C7.70206 15.5625 6.43327 15.1776 5.35407 14.4565C4.27488 13.7354 3.43374 12.7105 2.93704 11.5114C2.44034 10.3122 2.31038 8.99272 2.5636 7.71972C2.81682 6.44672 3.44183 5.27739 4.35962 4.35961C5.2774 3.44183 6.44672 2.81681 7.71972 2.5636C8.99272 2.31038 10.3122 2.44034 11.5114 2.93704C12.7105 3.43374 13.7354 4.27487 14.4565 5.35407C15.1776 6.43327 15.5625 7.70206 15.5625 9C15.5604 10.7398 14.8684 12.4078 13.6381 13.6381C12.4078 14.8684 10.7399 15.5604 9 15.5625ZM14.3125 9C14.3125 9.24864 14.2137 9.4871 14.0379 9.66291C13.8621 9.83873 13.6236 9.9375 13.375 9.9375H9C8.75136 9.9375 8.51291 9.83873 8.33709 9.66291C8.16128 9.4871 8.0625 9.24864 8.0625 9V4.625C8.0625 4.37636 8.16128 4.1379 8.33709 3.96209C8.51291 3.78627 8.75136 3.6875 9 3.6875C9.24864 3.6875 9.4871 3.78627 9.66292 3.96209C9.83873 4.1379 9.9375 4.37636 9.9375 4.625V8.0625H13.375C13.6236 8.0625 13.8621 8.16127 14.0379 8.33709C14.2137 8.5129 14.3125 8.75136 14.3125 9Z" fill="#0B9839"></path>
                                </svg>
                            </i>
                            <p class="">{data.tiempo_preparacion}</p>
                        </div>

                        <div class="flex items-center gap-[10px]">
                            <i>
                                <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.3902 15.4062C16.2944 13.5169 14.5933 12.0526 12.562 11.25C13.559 10.5023 14.2954 9.45986 14.667 8.27037C15.0385 7.08088 15.0264 5.80463 14.6324 4.6224C14.2383 3.44017 13.4822 2.4119 12.4713 1.68325C11.4603 0.954597 10.2457 0.5625 8.99955 0.5625C7.75337 0.5625 6.53878 0.954597 5.52783 1.68325C4.51688 2.4119 3.76082 3.44017 3.36674 4.6224C2.97266 5.80463 2.96055 7.08088 3.33212 8.27037C3.70369 9.45986 4.4401 10.5023 5.43705 11.25C3.40577 12.0526 1.70467 13.5169 0.608922 15.4062C0.484601 15.6217 0.450975 15.8778 0.515441 16.1181C0.579907 16.3583 0.737183 16.5632 0.952672 16.6875C1.16816 16.8118 1.42421 16.8454 1.66449 16.781C1.90477 16.7165 2.1096 16.5592 2.23392 16.3438C2.91964 15.1562 3.90586 14.17 5.09347 13.4844C6.28108 12.7988 7.62823 12.4378 8.99955 12.4378C10.3709 12.4378 11.718 12.7988 12.9056 13.4844C14.0932 14.17 15.0795 15.1562 15.7652 16.3438C15.8481 16.4858 15.9667 16.6038 16.1092 16.686C16.2517 16.7682 16.4132 16.8118 16.5777 16.8125C16.7423 16.8138 16.9043 16.7706 17.0464 16.6875C17.1532 16.626 17.2468 16.544 17.3218 16.4464C17.3969 16.3487 17.4519 16.2371 17.4839 16.1181C17.5158 15.9991 17.5239 15.875 17.5079 15.7529C17.4918 15.6307 17.4518 15.5129 17.3902 15.4062ZM4.93705 6.5C4.93705 5.69651 5.17531 4.91107 5.6217 4.243C6.06809 3.57492 6.70257 3.05422 7.4449 2.74674C8.18722 2.43926 9.00405 2.35881 9.7921 2.51556C10.5801 2.67231 11.304 3.05923 11.8722 3.62738C12.4403 4.19553 12.8272 4.9194 12.984 5.70745C13.1407 6.49549 13.0603 7.31233 12.7528 8.05465C12.4453 8.79698 11.9246 9.43145 11.2566 9.87785C10.5885 10.3242 9.80303 10.5625 8.99955 10.5625C7.9221 10.5625 6.88879 10.1345 6.12693 9.37262C5.36506 8.61075 4.93705 7.57744 4.93705 6.5Z" fill="#4688C3"></path>
                                </svg>
                            </i>
                            <p class="">{data.porcion_personas}</p>
                        </div>


                    </div>

                </div>

            </div>

        </a>
    )
}

export default Card