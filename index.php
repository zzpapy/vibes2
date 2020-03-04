<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vibes</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css" integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="public/styles/style.css">
</head>
<body>
<div class="modal close hide"><div class="affich .transform"><div class="center_modal"></div></div></div>
<i class='fas change fa-palette fa-3x'></i>
    <input id="choix" class="hide "  type="color">

<div id="wrapper">
    <header id="header">
        <div id="nav" class="flex">
            <div class="logo">
                <img src="public/images/logo.png" alt="image logo">
            </div>
            <div class="nav_menu">
                <a href="#title">home</a>
                <a href="#info">about</a>
                <a href="#gallery">portfolio</a>
                <a href="#testimonials">testimonials</a>
                <a href="#contact">contact</a>
                <a href="#footer">pages</a>
            </div>
        </div>
        <div id="title">
            <h1>html template for creative fol design agencies</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe beatae tempore cumque perspiciatis earum veritatis eum, vitae, laborum itaque voluptatem debitis tenetur, voluptatum in expedita.</p>
            <input type="submit" class="button" value="read more">
        </div>
    </header>
    <div class="main">
        <section id="info" class="flex">
            <div class="child">
                <h2>why choose us ?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tenetur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam.</p>
            </div>
            <div class="child">
                <h2>what you get ?</h2>
                <div><i class="fab fa-wordpress"></i></div>
                <div><i class="fas fa-cog"></i></div>
                <div><i class="far fa-paper-plane"></i></div>
            </div>
            <div class="child">
                <div class="deroul">
                    <h4><i class="fas fa-minus"></i>Lorem</h4>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                </div>
                <div class="deroul">
                    <h4><i class="fas fa-plus "></i>Ipsum</h4>
                    <p class="hide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                </div>
                <div class="deroul">
                    <h4><i class="fas fa-plus "></i>test</h4>
                    <p class="hide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                </div>
            </div>
        </section>
        <section id="gallery">
            <div class="gal_img flex">                
                <div class="img_gal">
                    <img src="public/images/photo1.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo2.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo3.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo4.png" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo5.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo6.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo3.jpg" alt="photo foret">               
                </div>
                <div class="img_gal">
                    <img src="public/images/photo1.jpg" alt="photo foret"> 
                </div>
                <div class="gal_nav"></div>
        </section>
        <section id="testimonials">
            <h1>client testimonials</h1>
            <div class="line"></div>
            <div class="line"></div>
            <div class="center_test">
                <div class="flex test">                    
                    <img src="public/images/moi.jpeg" alt="Avatar" style="width:90px">                    
                    <blockquote><span>Chris Fox.</span> CEO at Mighty Schools.John Doe saved us from a web disaster.</blockquote>
                </div>
                <div class="flex test">                    
                    <img src="public/images/moi.jpeg" alt="Avatar" style="width:90px">                    
                    <blockquote><span>Chris Fox.</span> CEO at Mighty Schools.John Doe saved us from a web disaster.</blockquote>
                </div>
                <div class="flex test">                    
                    <img src="public/images/moi.jpeg" alt="Avatar" style="width:90px">                    
                    <blockquote><span>Chris Fox.</span> CEO at Mighty Schools.John Doe saved us from a web disaster.</blockquote>
                </div>
            </div>
            <div class="become">
                <input type="submit" class="button text-rose border-rose .text-rose" value="become our client">
            </div>            
        </section>
        <section id="buy">
            <h1> new horizons await</h1>
            <div class="line"></div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae in velit sunt eius odit quasi repellendus explicabo commodi quos. Natus dolorum quibusdam, quasi veritatis quam vitae. Quibusdam, molestiae reiciendis?</p>
            <input class="button border-rose"type="submit" value="buy vibes on themeforest">
        </section>
        <section id="contact">
            <h1>GET IN TOUCH</h1>
            <div class="line"></div>
            <form action="apps/envoi.php" id="form" method="POST"class="flex">
                <div class="">
                    <div class="form_label">Votre nom</div>
                    <input id="nom" type="text" name ="nom" value="">                    
                    <div class="form_label">Votre email</div>
                    <input id="email" type="email" name ="email" value="">
                    <div class="form_label">Votre téléphone</div>
                    <input id="tel" type="text" name ="tel" value="">
                </div>
                <div>
                    <div class="form_label">sujet</div>
                    <input id="sujet" type="text" name ="sujet" value="">
                    <div class="form_label">message</div>
                    <textarea rows="4" cols="" name="comment" form="usrform"></textarea>
                    <button class="button border-rose btn-rose">envoyer</button>
                </div>

            </form>
        </section>
        <footer id="footer" class="flex">
            <div class="child">
                    <h2>why choose us ?</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, tenetur.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, laboriosam.</p>
                </div>
                <div class="child">
                    <h2>what you get ?</h2>
                    <div><i class="fab fa-wordpress"></i></div>
                    <div><i class="fas fa-cog"></i></div>
                    <div><i class="far fa-paper-plane"></i></div>
                </div>
                <div class="child">
                    <div class="deroul">
                        <h4><i class="fas fa-minus"></i>Lorem</h4>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                    </div>
                    <div class="deroul">
                        <h4><i class="fas fa-plus "></i>Ipsum</h4>
                        <p class="hide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                    </div>
                    <div class="deroul">
                        <h4><i class="fas fa-plus "></i>test</h4>
                        <p class="hide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora, corporis!</p>
                    </div>
                </div>
        </footer>
    </div>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js" integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>  
<script src="public/scripts/script.js"></script>
</body>
</html>