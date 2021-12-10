let blogs = [];

let month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function addBlog(event) {
  event.preventDefault();

  let titleData = document.getElementById('input-blog-title').value;
  let contentData = document.getElementById('input-blog-content').value;
  let imageData = document.getElementById('input-blog-image');

  imageData = URL.createObjectURL(imageData.files[0]);

  let blog = {
    author: 'Rhoma Irama',
    title: titleData,
    content: contentData,
    image: imageData,
    postedAt: new Date(),
  };

  blogs.push(blog);

  document.getElementById('input-blog-title').value = '';
  document.getElementById('input-blog-content').value = '';
  document.getElementById('input-blog-image').value = '';
  
  renderBlog();
}

function renderBlog() {
  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = '';

  for (let i = 0; i <= blogs.length; i++) {
    blogContainer.innerHTML += `<div class="blog-list-item">
                                    <div class="blog-image">
                                    <img src="${blogs[i].image}" alt="Ini Gambar" />
                                    </div>
                                    <div class="blog-content">
                                    <div class="btn-group">
                                        <button class="btn-edit">Edit Post</button>
                                        <button class="btn-post">Post Blog</button>
                                    </div>
                                    <h1>
                                        <a href="blog-detail.html" target="_blank">
                                            ${blogs[i].title}
                                        </a>
                                    </h1>
                                    <div class="detail-blog-content">
                                        ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
                                    </div>
                                    <p>${blogs[i].content}</p>
                                    <div style="text-align: right; font-size: 15px; color: grey;">
                                      ${getDistanceTime(blogs[i].postedAt)}
                                    </div>
                                </div>`;
  }
}

function getFullTime(time) {
  let tanggal = time.getDate()
  let indexBulan = time.getMonth()
  let bulan = month[indexBulan]
  let tahun = time.getFullYear()
  const jam = time.getHours()
  const menit = time.getMinutes()

  const result = `${tanggal} ${bulan} ${tahun} ${jam}:${menit} WIB`

  return result 

}

function getDistanceTime(time){
  
  const distance = new Date() - new Date(time)
  

  const milisecond = 1000 // jumlah milidetik dalam 1 detik
  const secondInHours = 3600// jumlah detik dalam 1 jam
  const hoursInDay = 23 // jumlah jam dalam 1 hari

  // convert to day

  const dayDistance = Math.floor(
    distance / (milisecond * secondInHours * hoursInDay)
  )

  if(dayDistance > 0) {
  return `${dayDistance} day ago`
  } else {
    // convert to hours
    const hoursDistance = Math.floor(distance / (1000 * 60 * 60))
    if(hoursDistance > 0){
      return `${hoursDistance} hours ago`
    } else {
      //convert to minute

      const minuteDistance = Math.floor(distance / (1000 * 60))
      return `${minuteDistance} minutes ago`
    }
  }
}

setInterval(()=>{
  if(blogs.length > 0){
    renderBlog();
  }
},1000)