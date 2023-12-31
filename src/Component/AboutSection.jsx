import quality from '../../public/img/quality.png'
import payment from '../../public/img/safe payment.png'
import delivary from '../../public/img/delivery-truck.png'
import Return from '../../public/img/return.png'
import support from '../../public/img/customer support .png'
const AboutSection = () => {
  return (
    <>
        <Card1
        img={quality}
        title="Quality assurance"
        subtitle="Highest quality precision product"
        ></Card1>

        <Card2
        img={payment}
        title="Secure transaction"
        subtitle="Fast and easy online payment">
        </Card2>

        <Card1
        img={delivary}
        title="Fastest delivery"
        subtitle="Safe and fast product delivery"
        ></Card1>

        <Card2
        img={Return}
        title="return policy"
        subtitle="Seven-day return policy">
        </Card2>

        <Card1
        img={support}
        title="Customer service"
        subtitle="24/7 online Customer service"
        ></Card1>
    </>
  )
}

export default AboutSection;


function Card1({img,title,subtitle}){
    return(
        <div className=' md:grid grid-cols-3 gap-3 w-11/12 mx-auto border-[1px] border-slate-200 p-4 rounded-lg my-5 shadow-md shadow-slate-400'>
        <aside className=' col-span-1 flex items-center justify-center mb-3'>
            <img className=' md:w-60 w-44' src={img} alt={img}/>
        </aside>
        <div className=' col-span-2 flex flex-col justify-center'>
            <h2 className='  md:text-3xl text-xl text-slate-500 font-bold mt-3 capitalize'>{title}</h2>
            <h2 className=' md:text-xl text-base font-semibold my-3 capitalize'>{subtitle}</h2>
            <small className=' font-semibold text-justify mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolor est rem quisquam, optio aspernatur modi porro praesentium quia autem, officiis doloribus. Autem excepturi tempore assumenda, harum natus</small>
        </div>
    </div>
    )
}
function Card2({img,title,subtitle}){
    return(
        <div className=' md:grid grid-cols-3 gap-3 w-11/12 mx-auto border-[1px] border-slate-200 p-4 rounded-lg my-5 shadow-md shadow-slate-400'>
        <div className=' col-span-2 flex flex-col justify-center'>
            <h2 className=' md:text-3xl text-xl text-slate-500 font-bold mt-3 capitalize'>{title}</h2>
            <h2 className=' md:text-xl text-base font-semibold my-3 capitalize'>{subtitle}</h2>
            <small className=' font-semibold text-justify mb-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dolor est rem quisquam, optio aspernatur modi porro praesentium quia autem, officiis doloribus. Autem excepturi tempore assumenda, harum natus</small>
        </div>
        <aside className=' col-span-1 flex items-center justify-center mb-3 '>
            <img className=' md:w-60 w-44' src={img} alt={img}/>
        </aside>
    </div>
    )
}