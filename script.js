const arr = [
  {
    FullName: "Vishal Kumar",
    Designation: "Senior Software Developer",
    BackgroundImage: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1554126807-6b10f6f6692a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Relationship: "Add Member",
    Username: "@raghavdev",
    ActiveStatus: "23m ago"
  },
  {
    FullName: "Priyanka Sharma",
    Designation: "Project Manager",
    BackgroundImage: "https://images.unsplash.com/photo-1665615838337-cb3c23953e1e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1617134471130-4186de7a137f?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Relationship: "Add Member",
    Username: "@priyanka_pm",
    ActiveStatus: "1h ago"
  },
  {
    FullName: "Amitabh Singh",
    Designation: "Data Scientist",
    BackgroundImage: "https://images.unsplash.com/photo-1659353221237-6a1cfb73fd90?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1659353221012-4b03d33347d2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D",
    Relationship: "Add Member",
    Username: "@amit_data",
    ActiveStatus: "5m ago"
  },
  {
    FullName: "Kavita Patel",
    Designation: "HR Manager",
    BackgroundImage: "https://images.unsplash.com/photo-1659353220373-a0008b3533c5?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1659353220940-5c5d0e2164d5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
    Relationship: "Add Member",
    Username: "@kavita_hr",
    ActiveStatus: "2h ago"
  },
  {
    FullName: "Vishal Gupta",
    Designation: "Product Designer",
    BackgroundImage: "https://images.unsplash.com/photo-1646562389450-a3dea4242fe7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1646562389619-1521a74d3c3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Relationship: "Add Member",
    Username: "@vishal_design",
    ActiveStatus: "15m ago"
  },
  {
    FullName: "Sanya Verma",
    Designation: "Marketing Specialist",
    BackgroundImage: "https://images.unsplash.com/photo-1649625805921-7279dcf54010?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDcyfHx8ZW58MHx8fHx8",
    ProfilePhoto: "https://images.unsplash.com/photo-1619914775880-73fc2dc96379?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Relationship: "Add Member",
    Username: "@sanya_marketing",
    ActiveStatus: "30m ago"
  },
  {
    FullName: "Ravi Kumar",
    Designation: "Business Analyst",
    BackgroundImage: "https://images.unsplash.com/photo-1621899576945-ab4f37af765c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ProfilePhoto: "https://images.unsplash.com/photo-1601489865452-407a1b801dde?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Relationship: "Add Member",
    Username: "@ravi_analyst",
    ActiveStatus: "10m ago"
  }
];

function createCard() {
  var clutter = ''
  arr.forEach(function (elem, idx) {
    clutter += ` <div id="card">
    <img
          src="${elem.BackgroundImage}"
          alt=""
        />
        <div class="upper-text">
          <h1>${elem.FullName}</h1>
          <h5>${elem.Designation}</h5>
        </div>
        <div class="lower-text">
          <div class="left-side">
            <div class="img">
              <img
                src="${elem.ProfilePhoto}"
                alt=""
              />
            </div>
            <div class="img-text">
              <h5>${elem.Username}</h5>
              <h6>${elem.ActiveStatus}</h6>
            </div>
          </div>
          <div class="right-side">
            <button id=${idx}><i class="ri-add-line"></i>${elem.Relationship}</button>
          </div>
        </div>
      </div>`
    // console.log(idx)
    var main = document.querySelector('.main')
    main.innerHTML = clutter
  })
}
createCard()


// card.style.backgroundImage = `url(${arr.BackgroundImage})`
var card = document.querySelector('.card')
var main = document.querySelector('.main')
var button = document.querySelector('.card button')

main.addEventListener('click', function (dets) {
  var gold = arr[dets.target.id]

  gold.Relationship = `<i class="ri-check-line"></i> Friends `

  createCard()
})