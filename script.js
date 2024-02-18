var teams = {
    'chennai_super_kings': {
        'name': 'Chennai Super Kings',
        'jersey': 'https://www.timesofsports.com/wp-content/uploads/2022/03/CSK-Jersey-2022.png',
        'captain': 'MS Dhoni'
    },
    'delhi_capitals': {
        'name': 'Delhi Capitals',
        'jersey': 'https://i.ebayimg.com/images/g/AZgAAOSwjYtgdels/s-l400.jpg',
        'captain': 'David Warner'
    },
    'gujarat_titans': {
        'name': 'Gujarat Titans',
        'jersey': 'https://crickpulse.com/wp-content/uploads/2023/05/GT-jersey-2024.png',
        'captain': 'Shubman Gill'
    },
    'sunrisers_hyderabad': {
        'name': 'Sunrisers Hyderabad',
        'jersey': 'https://crickpulse.com/wp-content/uploads/2023/05/SRH-jersey-2024-756x1024.png',
        'captain': 'Aiden Markram'
    },
    'punjab_kings': {
        'name': 'Punjab Kings',
        'jersey': 'https://5.imimg.com/data5/SELLER/Default/2021/5/FG/JX/DS/1756364/ipl-cricket-jerseys-500x500.jpg',
        'captain': 'Shikhar Dhawan'
    },
    'kolkata_knight_riders': {
        'name': 'Kolkata Knight Riders',
        'jersey': 'https://5.imimg.com/data5/SELLER/Default/2022/4/NA/VN/WZ/97790390/1-copy-13.png',
        'captain': 'Shreyas Iyer'
    },
    'royal_challengers_bangalore': {
        'name': 'Royal Challengers Bangalore',
        'jersey': 'https://crickpulse.com/wp-content/uploads/2023/05/RCB-jersey-2024-838x1024.png',
        'captain': 'Faf du Plessis'
    },
    'lucknow_super_giants': {
        'name': 'Lucknow Super Giants',
        'jersey': 'https://thebridge.in/h-upload/2022/03/22/25205-img-20220322-wa0002.webp',
        'captain': 'KL Rahul'
    },
    'rajasthan_royals': {
        'name': 'Rajasthan Royals',
        'jersey': 'https://crickpulse.com/wp-content/uploads/2023/05/rr-jersey-2024-779x1024.png',
        'captain': 'Sanju Samson'
    },
    'mumbai_indians': {
        'name': 'Mumbai Indians',
        'jersey': 'https://crickpulse.com/wp-content/uploads/2023/05/MI-jersey-2024.png',
        'captain': 'Hardik Pandya'
    }
};

function showTeamInfo(teamName) {
    var teamDetails = document.getElementById('team-details');
    teamDetails.innerHTML = '';

    if (teams.hasOwnProperty(teamName)) {
        var team = teams[teamName];
        var teamInfoHTML = '<h2>' + teams.name + '</h2>';
        teamInfoHTML += '<img src="' + teams.jersey + '" alt="Jersey">';
        teamInfoHTML += '<p><strong>Captain:</strong> ' + teams.captain + '</p>';
        teamDetails.innerHTML = teamInfoHTML;
    }
}

