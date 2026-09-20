import './projects.css'

export default function Projects({darkMode}){
    return(
        <div className={darkMode ? "darktopic" :"topic"}>
            <div className='webs'>
                <h5>1-<a href="https://erfan-kashanian.github.io/gym/">باشگاه کجا برم؟</a></h5>
                <ul>
                    <li>React : technology</li>
                    <li>جزئیات: یک سایت باشگاه یابی است که نام ، ادرس ، نوع ورزش و مشخصات باشکاه های موجود در چند شهر را به کاربر میگوید</li>
                </ul>
            </div>
            <div className='webs'>
                <h5>2-<a href='https://erfan-kashanian.github.io/Films/'>Films</a></h5>
                <ul>
                    <li>React : technology</li>
                    <li>جزئیات : یک سایت تماشا و دانلود فیلم است که تماما با استفاده از هوش مصنوعی و prompt chain که به هوش مصنوعی داده بودم ساخته ام</li>
                </ul>
            </div>
        </div>
    )
}