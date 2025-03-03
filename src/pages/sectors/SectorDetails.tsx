import React, { JSX, lazy } from 'react';
import { useParams } from "react-router-dom";
import { IMAGES } from '../../utils/staticJSON';
import Filtration from './details/products-procurement/Filtration';
import SealingSolutions from './details/products-procurement/SealingSolutions';
import StackEmissionsMonitors from './details/products-procurement/StackEmissionsMonitors';
import PremiumQualityIndustrialTools from './details/products-procurement/PremiumQualityIndustrialTools';
import HydraulicPneumaticTools from './details/products-procurement/HydraulicPneumaticTools';
import FlowControlSolutions from './details/products-procurement/FlowControlSolutions';
import BlastSprayNdtEquipments from './details/products-procurement/BlastSprayNdtEquipments';

const NotFound = lazy(() => import("../NotFound"));
const EngineeredTouchpointAccess = lazy(() => import("./details/ae-mi/EngineeredTouchpointAccess"));
const HeatSolutions = lazy(() => import('./details/ae-mi/HeatSolutions'));
const IntrusiveNonInrusive = lazy(() => import('./details/ae-mi/IntrusiveNonInrusive'));
const LeakSealingSolutions = lazy(() => import('./details/ae-mi/LeakSealingSolutions'));
const PredictiveMaintenanceSolutions = lazy(() => import('./details/ae-mi/PredictiveMaintenanceSolutions'));
const SealBondedSolutions = lazy(() => import('./details/ae-mi/SealBondedSolutions'));
const AdvancedNDT = lazy(() => import('./details/inspection/AdvancedNDT'));
const AdvancedTube = lazy(() => import('./details/inspection/AdvancedTube'));
const Conventional = lazy(() => import('./details/inspection/Conventional'));
const NonInvasive = lazy(() => import('./details/inspection/NonInvasive'));
const Specialized = lazy(() => import('./details/inspection/Specialized'));
const DiverterSystem = lazy(() => import('./details/upstream/DiverterSystem'));
const EngineeredLeakSealing = lazy(() => import('./details/upstream/EngineeredLeakSealing'));
const Completion = lazy(() => import('./details/upstream/Completion'));
const Intervention = lazy(() => import('./details/upstream/Intervention'));
const AquariumsPoolsPonds = lazy(() => import('./details/indoor-aquatics/AquariumsPoolsPonds'));
const EnvironmentalMonitoring = lazy(() => import('./details/automation-and-measuring/EnvironmentalMonitoring'));
const ProcessAutomation = lazy(() => import('./details/automation-and-measuring/ProcessAutomation'));
const GasCompressorUnitsFiltrationSystems = lazy(() => import('./details/automation-and-measuring/GasCompressorUnitsFiltrationSystems'));
const IndustrialGasChromatography = lazy(() => import('./details/automation-and-measuring/IndustrialGasChromatography'));
const FlowVolumeMeasurement = lazy(() => import('./details/automation-and-measuring/FlowVolumeMeasurement'));
const EngineeringFabrication = lazy(() => import('./details/efcc-and-maintenance/EngineeringFabrication'));
const TopsideInspectionSurvey = lazy(() => import('./details/topside-underwater/TopsideInspectionSurvey'));
const TopsideInstallationMaintenanceRepairs = lazy(() => import('./details/topside-underwater/TopsideInstallationMaintenanceRepairs'));
const UnderwaterProductsSolutions = lazy(() => import('./details/topside-underwater/UnderwaterProductsSolutions'));
const ModuMopuServicesPlatformMaintenance = lazy(() => import('./details/topside-underwater/ModuMopuServicesPlatformMaintenance'));
const GeneralDivingTankerVesselsInshoreServices = lazy(() => import('./details/topside-underwater/GeneralDivingTankerVesselsInshoreServices'));

const SectorDetails: React.FC = () => {

    const { id } = useParams();

    const componentMap: { [key: string]: JSX.Element } = {

        // upstream
        completion: <Completion />,
        intervention: <Intervention />,
        "engineered-leak-sealing-solutions": <EngineeredLeakSealing />,
        "diverter-system": <DiverterSystem />,

        // inspection
        "non-invasive-inspection": <NonInvasive />,
        "advanced-ndt-inspection": <AdvancedNDT />,
        "specialized-inspection": <Specialized />,
        "advanced-tube-inspection": <AdvancedTube />,
        "conventional-inspection": <Conventional />,
        
        // ae-mi
        "intrusive-non-inrusive-solutions": <IntrusiveNonInrusive />,
        "heat-solutions": <HeatSolutions />,
        "leak-sealing-solutions": <LeakSealingSolutions />,
        "seal-bonded-solutions": <SealBondedSolutions />,
        "engineered-touchpoint-access-solutions": <EngineeredTouchpointAccess />,
        "predictive-maintenance-solutions": <PredictiveMaintenanceSolutions />,

        // automation-and-measuring
        "environmental-monitoring": <EnvironmentalMonitoring />,
        "process-automation": <ProcessAutomation />,
        "gas-compressor-units-filtration-systems": <GasCompressorUnitsFiltrationSystems />,
        "industrial-gas-chromatography": <IndustrialGasChromatography />,
        "flow-volume-measurement-services": <FlowVolumeMeasurement />,

        // efcc-and-maintenance
        "engineering-fabrication-construction-commisioning-and-maintenance": <EngineeringFabrication />,

        // topside-underwater
        "topside-inspection-and-survey": <TopsideInspectionSurvey />,
        "topside-installation-maintenance-and-repairs": <TopsideInstallationMaintenanceRepairs />,
        "underwater-products-solutions": <UnderwaterProductsSolutions />,
        "modu-mopu-services-platform-maintenance": <ModuMopuServicesPlatformMaintenance />,
        "general-diving-tanker-vessels-inshore-services": <GeneralDivingTankerVesselsInshoreServices />,

        // products-procurement
        "filtration": <Filtration />,
        "sealing-solutions": <SealingSolutions />,
        "stack-emissions-monitors": <StackEmissionsMonitors />,
        "premium-quality-industrial-tools": <PremiumQualityIndustrialTools />,
        "hydraulic-pneumatic-tools": <HydraulicPneumaticTools />,
        "flow-control-solutions": <FlowControlSolutions />,
        "blast-spray-and-ndt-equipments": <BlastSprayNdtEquipments />,

        // indoor-aquatics
        "aquariums-pools-and-ponds": <AquariumsPoolsPonds />,
    };

    return (
        <>
            <section className="banner page-banner">
                <img src={IMAGES.banner_energy_sector} width="100%" alt="" />
            </section>
            {componentMap[id as string] || <NotFound />}
        </>
    )

}

export default SectorDetails;