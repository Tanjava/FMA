document.addEventListener("DOMContentLoaded", function() {

    displayPlayers();

})

const players = [
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/564x/65/26/ba/6526ba6d1685954bbb508f69e33dbd06.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/84/2f/71/842f715ccc3d941c80aef6a0ffc6eaef.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/86/2b/39/862b393c6475668a1476b9738296dd54.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/9a/b1/40/9ab1404dbc05931627374ab92a5c46ac.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/95/ac/04/95ac0412528b53fbdfda97818ef13e64.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/dd/fc/b2/ddfcb28c5d6eca51067f355e36f90030.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/bb/63/4f/bb634f6c0a7405cc8dbf1e2cc2d55dda.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/82/a1/1f/82a11f8db7228a0cb50578d5ea74b284.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/6f/1b/1b/6f1b1b01b833305b09907da1d703c87f.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://i.pinimg.com/236x/56/e4/65/56e465d3fc609bb9de9f7596a7d3ac5c.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084f53d96ef__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084e3a43eb0__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-640850ee3b0b1__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084f55947ac__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64085c04aaed1__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084b6c2f08f__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084f58c7e23__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084e45068b8__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-640850f12310d__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084f57351cc__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64085004add76__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64084b63d51fb__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-640850f82d813__700.jpg' },
    { name: 'Player Name', team: 'Team Name', photo: 'https://www.boredpanda.com/blog/wp-content/uploads/2023/03/Super-kittens-Designer-Imagines-Feline-Versions-of-Marvel-and-DC-Heroes-29-Pics-64085e3e0d50e__700.jpg' }
];

const playerList = document.getElementById('player-container');

function displayPlayers() {
    let output = '';
    for (let i = 0; i < players.length; i++) {
        output += `
        <div class="player-card">
        <div class="player-content">
        <img class="zoom" src="${players[i].photo}" alt="${players[i].name}">
        <h3>${players[i].name}</h3>
        <p>${players[i].team}</p>
        </div>
   </div>`
    }
    playerList.innerHTML = output;
}