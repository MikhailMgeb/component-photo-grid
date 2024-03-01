import React from 'react';
import { FC } from 'react';

import { cnPhotoContainer } from './PhotoContainer.classname';
import type {dataSrcType} from './dataType';

import './PhotoContainer.css';

type PhotoContainerProps = {
    srcImages: dataSrcType[];
}


const PhotoContainer: FC<PhotoContainerProps> = ({srcImages}) => {
    // console.log(srcImages)

    return (
        <div className={cnPhotoContainer()}>
            <div className={cnPhotoContainer('Column')}>
                {srcImages.map((srcImage, index) => <img className='' src={srcImage.urls.small} alt='/' key={index} />)}
            </div>
        </div>

    );
}

export default PhotoContainer;
