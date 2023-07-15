import './Home.css'

export default function Home() {
    return (
        <div id='all_content_boxes'>
            <div className='box'>
                <div className='content_box'>
                    <p className='box_title'>Lebenslauf</p>
                </div>
                <p className='description'>Meine bisherigen schulischen Werdegänge mit allen relevanten Informationen</p>
            </div>

            <hr className='line'></hr>

            <div className='box_switch'>
                <p className='description_switch'>bla bla</p>
                <div className='content_box_switch'>
                    <p className='box_title'>Stärken</p>
                </div>
            </div>

            <hr className='line'></hr>

            <div className='box'>
                <div className='content_box'>
                    <p className='box_title'>IT-Projekte</p>
                </div>
                <p className='description'>bla bla</p>
            </div>

            <hr className='line'></hr>

            <div className='box_switch'>
                <p className='description_switch'>bla bla</p>
                <div className='content_box_switch'>
                    <p className='box_title'>Interessen</p>
                </div>
            </div>

            <hr className='line'></hr>

            <div className='box'>
                <div className='content_box'>
                    <p className='box_title'>Portfolio</p>
                </div>
                <p className='description'>Meine Noten vom 1. bis zum 3. Schuljahr von der gibb und von bwd</p>
            </div>
        </div>
    )
}
