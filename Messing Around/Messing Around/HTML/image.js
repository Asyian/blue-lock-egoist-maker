const images = [

    'https://static.wikia.nocookie.net/duckpond/images/4/40/Donquixote.jpeg/revision/latest?cb=20230505142227',

    'https://preview.redd.it/duke-erisia-is-an-impossible-boss-fight-and-everyone-who-v0-y6gapmjhye3c1.png?width=137&format=png&auto=webp&s=230983133fe9cb456da7e00b485f2d706cd9fe78',

    'https://embed.pixiv.net/artwork.php?illust_id=117229164&mdate=1711304172',

    'https://static.wikia.nocookie.net/project-deepwoken/images/c/ca/Klaris.PNG/revision/latest?cb=20230223060401',

    'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3bd7de02-f750-458a-8fec-5b27422bd9a2/dfb8rx7-4d48b6f0-547a-48b2-b6d6-56cbba704f97.png/v1/fill/w_1280,h_1600/aizen_neko_maid_by_hcaricatura_dfb8rx7-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTYwMCIsInBhdGgiOiJcL2ZcLzNiZDdkZTAyLWY3NTAtNDU4YS04ZmVjLTViMjc0MjJiZDlhMlwvZGZiOHJ4Ny00ZDQ4YjZmMC01NDdhLTQ4YjItYjZkNi01NmNiYmE3MDRmOTcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.tOJnGBJXSXDrgF9S3Y6NI1_--X1MuI971xxajRYd2ME'
];

function changeImage() {
    const container = document.getElementById('image-container');
        
    const randomIndex = Math.floor(Math.random() * images.length);
    container.style.backgroundImage = `url(${images[randomIndex]})`;
}

setInterval(changeImage, 100)