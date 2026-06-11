import { useFormik } from 'formik'
import './sign.css'
export default function Sign(){
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
        <div className='main'>
            <h5 className='describe'>این یک فرم ثبت نام آزمایشی است که با استفاده از useFormik  زده ام و برای استایل های آن از  bootStrap استفاده کرده ام</h5>
            <form onSubmit={formik.handleSubmit} className='container my-4 p-3 border border-primary
             border-3 rounded-4 bg-primary-subtle d-flex flex-column justify-content-center align-items-center w-50'>
                <div className='m-1'>
                    <label className='form-label '>نام کاربری : </label>
                    <input type='text' id='username' value={formik.values.username}
                    onChange={formik.handleChange} className={ formik.errors.username ? "border border-1 border-danger rounded": "form-control"}/>
                </div>
                {formik.errors.username && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.username}</div>}
                <div className='m-1'>
                    <label className='form-label'>رمز عبور : </label>
                    <input type='password' id='password' value={formik.values.password}
                    onChange={formik.handleChange} className={formik.errors.password ? "border border-1 border-danger rounded" : "form-control"}/>
                </div>
                {formik.errors.password && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.password}</div>}
                <div className='m-1'>
                    <label className='form-label'>ایمیل : </label>
                    <input type='email' id='email' value={formik.values.email}
                    onChange={formik.handleChange} className={formik.errors.email ? "border border-1 border-danger rounded" : "form-control"}/>
                </div>
                {formik.errors.email && <div className='text-danger border rounded border-danger-subtle bg-danger-subtle my-3 p-1'>{formik.errors.email}</div>}
                <button className='btn btn-primary'>ورود</button>
                <a href='#'>فراموشی رمز عبور</a>
            </form>
        </div>
    )
}