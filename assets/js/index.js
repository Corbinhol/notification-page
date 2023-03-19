let notificationStatus = [false, false, false, true, true, true, true];

let notification = document.getElementsByClassName("notification");

// for(let i=0; i<notifications.length; i++)
//     {
//     console.log(notifications[i]);
//     }

// console.log(notifications);
updateScreen(false);
document.getElementById("mark-all").onclick = () => {
    for(i=0; i<notificationStatus.length; i++)
        {
            notificationStatus[i] = true;
        }
    updateScreen(true)    
}

function updateScreen(fadeout)
    {
    let numberOfNotifications = 0;
    for(i=0; i<notificationStatus.length; i++)
        {
        if(notificationStatus[i] == false)
            {
            notification[i].style.backgroundColor = "var(--notification-background-color)";
            document.getElementById("dot-" + (i+1)).style.opacity = 100;
            numberOfNotifications++;

            }
        else
            {
            if(fadeout)
                {
                notification[i].classList.toggle("animatedFadeout");
                document.getElementById("dot-" + (i+1)).classList.toggle("animatedFadeout")
                }
            notification[i].style.backgroundColor = "transparent";
            document.getElementById("dot-" + (i+1)).style.opacity = 0;
            }
        }
    console.log(numberOfNotifications);
    document.getElementById("number-of-notifications").innerHTML = numberOfNotifications;
    if(numberOfNotifications == 0)
        {
            document.getElementById("number-of-notifications").classList.toggle("animatedFadeout")
            document.getElementById("number-of-notifications").style.opacity = 0;
            
        }
    }



updateScreen()

for(i=0; i<notification.length; i++) {

    notification[i].addEventListener("click", function() {
        console.log(this);
        notificationStatus[this.id - 1] = true;
        updateScreen(true);
    })

    notification[i].onmouseover = current => {
        if (current.target.id != "")
            {
            document.getElementById(current.target.id).style.backgroundColor = "var(--notification-hover)";
            }
        
    }

    notification[i].onmouseleave = current => {
        updateScreen(true)
    }
}