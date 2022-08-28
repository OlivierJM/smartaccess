
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import GroupsIcon from '@mui/icons-material/Groups';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import AddAlertIcon from '@mui/icons-material/AddAlert';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

const navigation = () => {
  return [
    {
      title: 'Dashboard',
      icon: GridViewOutlinedIcon,
      path: '/'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Users',
      icon: GroupsIcon,
      path: '/users',
    },
    {
      title: 'Guests',
      icon: PeopleOutlineIcon,
      path: '/guests',
    },
    {
      title: 'AccessBook',
      icon: MenuBookIcon,
      path: '/accessbook'
    },
    {
      title: 'House Holds',
      icon: MapsHomeWorkIcon,
      path: '/houses',
    },
    {
      title: 'Announcements',
      icon: AddAlertIcon,
      path: '/announcements'
    },
    {
      title: 'User Feedback',
      icon: RateReviewIcon,
      path: '/feedback'
    },
    {
      icon: SettingsOutlinedIcon,
      title: 'Settings',
      path: '/settings'
    },
    {
      icon: LogoutOutlinedIcon,
      title: 'Logout',
      path: '/logout'
    }
  ]
}

export default navigation
