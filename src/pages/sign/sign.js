import { useFormik } from 'formik'
import './sign.css'
export default function Sign({darkMode}){
    const formik=useFormik({
        initialValues:{
            username:"",
            password:"",
            email:"",
        },
        onSubmit:values=>{
            console.log(values);
            
        },
        validate: values=>{
            let errors={}
            if(!values.username){
                errors.username="نام کاربری را وارد کنید"
            }
            if(!values.password){
                errors.password="رمز عبور را وارد کنید"
            }
            if(!values.email){
                errors.email="ایمیل را وارد کنید"
            }
            return errors
        }
    })
    return(
        <div className={darkMode ? "darkmainPart" : "mainPart"}>
            <h5 className='describe'>این یک فرم ثبت نام آزمایشی است که با استفاده از useFormik  زده ام و برای استایل های آن از  bootStrap استفاده کرده ام و برای ورود بدون وارد کردن اطلاعات validation قرار داده ام </h5>
            <form onSubmit={formik.handleSubmit} className={!darkMode ? "container my-4 p-3 border border-primary border-3 rounded-4 bg-primary-subtle d-flex flex-column justify-content-center align-items-center w-50 shadow-lg p-3 mb-5 bg-body-tertiary rounded" : "container my-4 p-3 border border-dark border-3 rounded-4 bg-secondary  d-flex flex-column justify-content-center align-items-center w-50 shadow-lg p-3 mb-5  rounded"}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-12 mb-3'>
                            <label className='form-label'>نام کاربری : </label>
                            <input type='text' id='username' value={formik.values.username}
                            onChange={formik.handleChange} className={ formik.errors.username ? "form-control border border-1 border-danger rounded": "form-control"}/>
                        </div>
                        {formik.errors.username && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.username}</div>}
                        <div className='col-12 mb-3'>
                            <label className='form-label'>رمز عبور : </label>
                            <input type='password' id='password' value={formik.values.password}
                            onChange={formik.handleChange} className={formik.errors.password ? "form-control border border-1 border-danger rounded" : "form-control"}/>
                        </div>
                        {formik.errors.password && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.password}</div>}
                        <div className='col-12 mb-3'>
                            <label className='form-label'>ایمیل : </label>
                            <input type='email' id='email' value={formik.values.email}
                            onChange={formik.handleChange} className={formik.errors.email ? "form-control border border-1 border-danger rounded" : "form-control"}/>
                        </div>
                        {formik.errors.email && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.email}</div>}
                        <button className={darkMode ? "btn btn-dark" : "btn btn-primary"}>ورود</button>
                        <a href='#' className={darkMode ? "darklink" : "link"}>فراموشی رمز عبور</a>
                    </div>
                </div>
            </form>
        </div>
    )
}