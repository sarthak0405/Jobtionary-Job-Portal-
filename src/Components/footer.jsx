import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="site-footer">

                <a href="/top" class="smoothscroll scroll-top">
                    <span class="icon-keyboard_arrow_up"></span>
                </a>

                <div class="container">
                    <div class="row mb-5">
                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Search Trending</h3>
                            <ul class="list-unstyled">
                                <li><a href="graphic design.html">Graphic Design</a></li>
                                <li><a href="marketing strategy.html">Marketing Strategy</a></li>
                                <li><a href="web design.html">Web Design</a></li>
                                <li><a href="market leading.html">Market Leading</a></li>
                                <li><a href="seo.html">Search Engine Optimization</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Company</h3>
                            <ul class="list-unstyled">
                                <li><a href="/">About Us</a></li>
                                <li><a href="/">Career</a></li>
                                <li><a href="/">Courses</a></li>
                                <li><a href="/">Blog</a></li>
                                <li><a href="/">Resources</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Support</h3>
                            <ul class="list-unstyled">
                                <li><a href="/">Support</a></li>
                                <li><a href="/">Privacy</a></li>
                                <li><a href="/">Terms of Service</a></li>
                            </ul>
                        </div>
                        <div class="col-6 col-md-3 mb-4 mb-md-0">
                            <h3>Contact Us</h3>
                            <div class="footer-social">
                                <a href="https://www.facebook.com/abhay.sonawane.7967"><span class="icon-facebook"></span></a>
                                <a href="https://twitter.com/AbhaySonaw64849"><span class="icon-twitter"></span></a>
                                <a href="https://www.instagram.com/abhaysonawane358/"><span class="icon-instagram"></span></a>
                                <a href="/"><span class="icon-linkedin"></span></a>
                            </div>
                        </div>
                    </div>


                    <div class="row text-center">
                        <div class="col-12">
                            <p class="copyright"><small>

                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | JOBTIONARY
                            </small></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer