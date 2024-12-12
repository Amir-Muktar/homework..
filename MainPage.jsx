
import About from '../components/About';
import Title from '../components/Title';

function MainPage() {
    return (
        <>
            <About info={{title: "some Title", body:"body"}}/>
            <Title text="Hello world" />
        </>
    )
}
export default MainPage;