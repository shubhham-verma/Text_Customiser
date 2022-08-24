import React from 'react'

export default function About() {
    return (
        <div class="jumbotron m-5">
            <h1 class="display-4">WELCOME TO TEXT-CUSTOMIZER!!!</h1>
            <br /><br /><br />
            <p class="lead">This is a simple text based utility that can help you to customize your text in lots of different ways according to your needs. Please, do check ut other websites offered with suite as well. We have - </p>
            <div className="container w-50 justify-content-start">
                <ul class="list-group" >
                    <li class="list-group-item">File Corrupting Service</li>
                    <li class="list-group-item">TIC-TAC-TOE</li>
                    <li class="list-group-item">Image Enhancer</li>
                </ul></div>
            <hr class="my-4" />
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg " href="#" role="button">Have a <br/> Good Time</a>
            </p>
        </div>
    )
}
