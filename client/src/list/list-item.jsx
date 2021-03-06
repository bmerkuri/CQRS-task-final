import MUITableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import { itemStatus } from '../constants';
import { AiFillAlert} from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
const styles = {
	general: {
		padding: '20px',
		margin: '4px',
	},
	processing: {
		background: 'pink',
		cursor: 'not-allowed',
		pointerEvents: 'none',
		opacity: 0.5,
	},
	open: {
		background: 'rgba(65, 203, 113, 0.1)',
	},
	deleted: {
		border: '1px dashed #AAA',
		background: 'rgba(0,0,0, 0.1)',
		color: "#FFF",
		cursor: 'not-allowed',
		pointerEvents: 'none',
		textShadow: '0px 1px 1px #BBB'
	},
	created: {
		border: '1px solid #FFA900',
		background: 'rgba(255,169,0, 0.2)',
		color: "#FFF",
		cursor: 'not-allowed',
		pointerEvents: 'none',
		textShadow: '0px 1px 1px #BBB',
		opacity: 0.5
	},
	error: {
		border: '1px solid #FFA900',
		background: 'red',
		cursor: 'not-allowed',
		pointerEvents: 'none',
		textShadow: '0px 1px 1px #BBB',
		opacity: 0.5

	}
}

const ListItem = ({ item, onEdit, onDelete }) => {
	return (
		<MUITableRow style={{ ...styles.general, ...styles[item.status] }}>
			<TableCell sx={{ width: 100 }} align="center">
			{([itemStatus.PROCESSING, itemStatus.CREATED].includes(item.status)) && <IconButton color="primary" onClick={() => onEdit(item)}>
					<AiFilllock />
				</IconButton>} 

			{([itemStatus.ERROR].includes(item.status)) && <IconButton color="primary" onClick={() => onEdit(item)}>
					<AiFillAlert />
				</IconButton>}
			{([itemStatus.DELETE].includes(item.status)) && <IconButton color="primary" onClick={() => onEdit(item)}>
					<BsFillTrashFill />
				</IconButton>}   
			{([itemStatus.OPEN].includes(item.status)) && <IconButton color="primary" onClick={() => onEdit(item)}>
					<AiFillUnlock />
				</IconButton>} 
			</TableCell>
			<TableCell style={{ flexGrow: '1' }}>
				
				{item.title}
			</TableCell>
			<TableCell sx={{ width: 170 }} align='right'>
				<IconButton color="primary" onClick={() => onEdit(item)}>
					<EditIcon />
				</IconButton>
				<IconButton sx={{color: '#CC0000'}} onClick={() => onDelete(item.id)}>
					<DeleteForeverIcon />
				</IconButton>

			</TableCell>
		</MUITableRow>
	);
}

export default ListItem