import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
    return (
        <div>
            <h1>LOGIN PAGE</h1>
            <div class="login">
            <form onSubmit=''>
                <label>
                Name:
                <input type="text" value='' onChange='' />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
            <div class="registration">
            <form onSubmit=''>
                <label>
                Name:
                <input type="text" value='' onChange='' />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
}

