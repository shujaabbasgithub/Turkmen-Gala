import React, { JSX } from 'react';
import { useParams } from "react-router-dom";
import { IMAGES } from '../../utils/staticJSON';
import NotFound from '../NotFound';
import AeMi from './items/AeMi';
import AutomationMeasuring from './items/AutomationMeasuring';
import EfccMaintenance from './items/EfccMaintenance';
import IndoorAquatics from './items/IndoorAquatics';
import Inspection from './items/Inspection';
import ProductsProcurement from './items/ProductsProcurement';
import TopsideUnderwater from './items/TopsideUnderwater';
import Upstream from './items/Upstream';

const SectorItems: React.FC = () => {

    const { id } = useParams();

    const componentMap: { [key: string]: JSX.Element } = {
        upstream: <Upstream />,
        inspection: <Inspection />,
        "ae-mi": <AeMi />,
        "automation-and-measuring": <AutomationMeasuring />,
        "efcc-and-maintenance": <EfccMaintenance />,
        "topside-underwater": <TopsideUnderwater />,
        "products-procurement": <ProductsProcurement />,
        "indoor-aquatics": <IndoorAquatics />,
    };

    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_infra_sector} width="100%" alt="" />
            </section>
            {componentMap[id as string] || <NotFound />}
        </>
    )
}

export default SectorItems;