import background from '../../assets/background.png'


export const styledMainResults = {
    'display': 'block',
    'width': '100%',
    'top': '60px',
    'height': '100%',
    'min-height': '100vh',
    'bacground-color': "transparent",
    'background-blend-mode': 'overlay',
    'background-repeat': 'repeat-x repeat-y',
    'background-image': `url(${background}), linear-gradient(rgba(229,229,229,255) ,rgba(229,229,229,255))`
};

export const styledTextResults = {
    'padding-top': '50px',
    'padding-left': '13px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '18px',
    'line-height': '21px',
    'align-items': 'center',
    'color': '#2F2544'
};

export const styledImageBackground = {
    'position': 'absolute',
    'top': 60,
    'bottom': 0,
    'right': 0,
    'left': 0,
    'height': '100%',
    'pointer-events': 'none'
};

export const styledButtonCard = {
    'position': 'absolute',
    'bottom': '10px',
    'left': '10px',
    'right': '10px',
    'color': "white",
    'height': '36px',
    'line-height': '36px',
    'bottom': '20px',
    'background': '#8C56C2',
    'border-radius': '20px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '14px',
    'text-align': 'center',
    'cursor': 'pointer'
};

export const styledAvatar = {
    'position': 'absolute',
    'width': '266px',
    'height': '266px',
    'left': 'calc(50% - 266px/2 - 317px)',
    'top': 'calc(50% - 266px/2)',
    'border-radius': '10px'
};

export const styledModal = {
    'position': 'absolute',
    'width': '980px',
    'height': '346px',
};



export const styledListCard = {
    'margin-top': '50px',
    'max-width': '980px',
    'margin': "auto",
};

export const styledCard = {
    'border-radius': '10px 10px 0px 0px',
    'height': '273px',
};

export const styledContainerUser = {
    'margin-left': '10px',
    'margin-top': '10px',
};

export const styledUserName = {
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '18px',
    'line-height': '21px',
};

export const styledDescriptionName = {
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '12px',
    'line-height': '14px',
    'margin-top': '0px'
};

export const styledLabelModal = {
    'margin-top': '20px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '16px',
    'display': 'flex',
    'align-items': 'center',
    'color': '#2F2544',
};

export const styledDataModal = {
    'margin-top': '4px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '16px',
    'display': 'flex',
    'align-items': 'center',
    'color': '#7B6490',
};

export function styledImageModal(image){
    return(
        {
            'position': 'absolute',
            'width': '266px',
            'padding': 40,
            'padding-bottom': 0,
            'height': '266px',
            'background-size': 'cover',
            'background': `url(${image})`,
            'border-radius': '10px',
        }
    )
}

export const styledHeaderModal = {
    'margin-top': '4px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '18px',
    'line-height': '21px',
    'display': 'flex',
    'align-items': 'center',
    'color': '#2F2544',
};

export const styledLeftDataModal = {
    'position': 'absolute',
    'left': '306px',
    'top': '40px',
    'background': '#FFFFFF',
};

export const styledRightDataModal = {
    'position': 'absolute',
    'right': '40px',
    'top': '62px',
    'background': '#FFFFFF',
};

export const styledButtonExitModal = {
    'position': 'absolute',
    'right': '40px',
    'height': '40px',
    'bottom': '40px',
    'background': '#FFFFFF',
    'border': '1px solid #8C56C2',
    'color': '#8C56C2',
    'border-radius': '4px',
};

export const styledTextButtonExitModal = {
    'padding': '10px 17px',
    'font-family': 'Roboto',
    'font-style': 'normal',
    'font-weight': '500',
    'font-size': '14px',
    'display': 'flex',
    'align-items': 'center',
    'text-align': 'center',
    'text-transform': 'uppercase',
    'color': '#8C56C2'
};

export const styledImageCard = {
    'height': '130px',
    'border-radius': '10px 10px 0px 0px'
};

export const styledScoreCard = {
        'font-family': 'Roboto',
        'font-style': 'normal',
        'font-weight': 'normal',
        'font-size': '12px',
        'line-height': '14px'
};