// MSB Logistics Website JavaScript

document.addEventListener("DOMContentLoaded", function () {

    console.log("MSB Website Loaded Successfully");

    // Smooth scrolling for navigation links
    document.querySelectorAll("a[href^='#']").forEach(link => {

        link.addEventListener("click", function(e){

            e.preventDefault();

            const section = document.querySelector(
                this.getAttribute("href")
            );

            if(section){
                section.scrollIntoView({
                    behavior:"smooth"
                });
            }

        });

    });


    // Certificate 3D hover effect
    const certificates = document.querySelectorAll(".cert");

    certificates.forEach(card => {

        card.addEventListener("mousemove", function(e){

            const rect = card.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const rotateX = ((y / rect.height) - 0.5) * 15;
            const rotateY = ((x / rect.width) - 0.5) * 15;


            card.style.transform =
            `perspective(800px)
             rotateX(${-rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

        });


        card.addEventListener("mouseleave", function(){

            card.style.transform =
            "perspective(800px) rotateY(-10deg)";

        });

    });


    // Simple reveal animation
    const sections = document.querySelectorAll(
        ".about, .stats, .certificates, .card"
    );


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.style.opacity="1";
                    entry.target.style.transform="translateY(0)";

                }

            });

        },
        {
            threshold:0.15
        }
    );


    sections.forEach(section => {

        section.style.opacity="0";
        section.style.transform="translateY(30px)";
        section.style.transition="0.7s ease";

        observer.observe(section);

    });


});
