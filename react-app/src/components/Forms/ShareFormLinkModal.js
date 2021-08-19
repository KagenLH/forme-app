import React, {useState} from 'react'
import { Modal } from '../../context/Modal.js'
import ShareFormLink from './ShareFormLink';

function ShareFormLinkModal({ formId }) {
    const [showModal, setShowModal] = useState(false);
    const [shareFormLink, setShareFormLink] = useState(`http://www.forme-live.herokuapp.com/forms/${formId}/shared`)

    return (
        <>
            <i onClick={() => setShowModal(true)} className="fa fa-share-alt-square" title='Share' aria-hidden="true" />
            {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <ShareFormLink formUrl={shareFormLink} />
                </Modal>
            )}
        </>
    )
}

export default ShareFormLinkModal
