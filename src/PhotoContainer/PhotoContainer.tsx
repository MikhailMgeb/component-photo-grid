import React from 'react';
import { FC } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import './PhotoContainer.css';

type PhotoContainerProps = {
    urls: string[];
}

const PhotoContainer: FC<PhotoContainerProps> = ({ urls }) => {
    return (
        <ResponsiveMasonry>
            <Masonry>
                {urls.map((srcImage, index) =>
                    <a href={srcImage} data-lightbox="home-gallery" key={index}>
                        <img src={srcImage} alt="home-gallery" />
                    </a>
                )}
            </Masonry>
        </ResponsiveMasonry>
    );
}

export default PhotoContainer;
