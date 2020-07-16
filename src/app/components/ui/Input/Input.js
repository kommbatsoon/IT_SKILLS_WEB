import React from 'react';
import {makeStyles} from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';

const theme = {
	color: {
		textPrimary: '#F2F2F2',
		border: '#B2B2B2',
	},
	gradient: {
		goldPrimary:
			'-webkit-linear-gradient(148.74deg, #FCD17B -51.47%, #C3971C -27.96%, #B88927 -4.62%, #E2C280 21.85%, #D3B16E 31.19%, #BF9955 44.29%, #A57617 67.17%, #AE8020 93.65%, #FFCF69 114.78%)',
	},
	font: {
		regular: 'Geometria-Regular',
		medium: 'Geometria-Medium',
		bold: 'Geometria-Bold',
	},
};

const useStyles = makeStyles({
	root: {
		width: '100%',
		'& label, & .MuiInput-input::-webkit-input-placeholder': {
			fontFamily: theme.font.regular,
			color: '#B2B2B2',
			opacity: '0.5',
			fontSize: '18px',
			lineHeight: '23px',
		},
		'& .MuiInput-input': {
			color: theme.color.textPrimary,
			fontFamily: theme.font.regular,
			fontStyle: 'normal',
			fontWeight: 'normal',
			fontSize: '18px',
			lineHeight: '23px',
		},
		'& label.Mui-focused': {
			opacity: '1',
			background: theme.gradient.goldPrimary,
			'-webkit-background-clip': 'text',
			'-webkit-text-fill-color': 'transparent',
		},
		'& .MuiInput-underline:before, & .MuiInput-underline:after': {
			border: 'none',
			display: 'block',
			position: 'absolute',
			bottom: '0',
			left: '0',
			height: '1px',
			width: '100%',
		},
		'& .MuiInput-underline:before': {
			background: theme.color.border,
		},
		'& .MuiInput-underline:after': {
			background: theme.gradient.goldPrimary,
		},
		'& .MuiInput-underline:hover:not(.Mui-disabled):before': {
			border: 'none',
		},
	},
});

export const Input = ({label, placeholder, multiline}) => {
	const classes = useStyles();
	return <TextField classes={{root: classes.root}} label={label} placeholder={placeholder} multiline={multiline} />;
};
