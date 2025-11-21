const contact = document.getElementById("contact") as HTMLDivElement;
const contact_anchor = document.getElementById("Contact-Me") as HTMLAnchorElement;
const contact_form = document.getElementById("form-container") as HTMLFormElement;
let visibility: boolean = false;
contact_anchor.addEventListener("click", function show() {

    if (visibility) {
        contact.style.animationName = "unblur_bg";
        setTimeout(function show () {
            contact_form.style.visibility = "hidden";
        },0.1)
        contact.style.animationTimingFunction = "ease-out";
        visibility = false;
    } else {
        contact.style.animationName = "blur_bg";
        setTimeout(function unshow () {
            contact_form.style.visibility = "visible";
        },0.1)
        
        visibility = true;
    }

    console.log(visibility);
});

const submitform = document.getElementById("submitmsg") as HTMLButtonElement;
const email = document.getElementById("email") as HTMLInputElement;
const msg = document.getElementById("msg") as HTMLTextAreaElement;


submitform.addEventListener("click", () => {
    setTimeout(() => {
        email.value = ""
        msg.value = "'"
    },1)
})