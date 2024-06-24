import { Box, Typography } from "@mui/material"
import { SentimentNeutralOutlined } from "@mui/icons-material"
import RoofingRoundedIcon from '@mui/icons-material/RoofingRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const user = {
  name: 'Eslender Cruz',
  photo: '../src/assets/userpfp.jpeg'
}

const Topbar = () => {
  return (
  <Box sx={{
    display: 'flex',
    flexDirection: 'row',
    height: '30px',
    color: "#FFF",
    justifyContent: 'space-between',
    padding: 2,
    overflow: 'hidden'
  }}>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    }}>
      <SentimentNeutralOutlined/>
      <input placeholder="Search" className="input-search"/>
    </Box>
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 3
    }}>
      <RoofingRoundedIcon color='success'/>
      <ChatBubbleOutlineRoundedIcon/>
      <NotificationsNoneRoundedIcon/>
      <FavoriteBorderRoundedIcon/>
    </Box>
    <Box sx={{
      display: 'flex',
      gap: 2,
      backgroundColor: '#373A40',
      padding: 0.5,
      height:'25px',
      borderRadius: '13px',
      alignItems: 'center'
    }}>
      <Box sx={{
        display: 'flex',
        borderRadius: '10px',
        overflow: 'hidden',
        width: '25px',
        height: '25px',
        justifyContent: 'center'
      }}>
        <img src={user.photo} width='100%' height='100%'/>
      </Box>
      <Typography sx={{fontSize: 13}}>{user.name}</Typography>
      <ExpandMoreIcon sx={{marginRight: 1, fontWeight: 'bold', fontSize: 17}}/>
    </Box>
  </Box>
  )
}

export default Topbar
