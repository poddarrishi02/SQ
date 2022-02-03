import React from 'react';
import { FileSelector } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 300,
};

export default function FileUpload() {
    return (
        <div>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                style={containerStyles}
                label="File selector multiple"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Can select multiple files"
                variant="multiline"
                multiple
            />
        </div>
    );
}