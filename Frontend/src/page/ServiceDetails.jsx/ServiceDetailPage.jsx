import { useParams, Navigate } from 'react-router-dom';
import { getServiceBySlug } from '../../data/Index';
import ServiceDetailLayout from './ServiceDetailLayout';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const service = getServiceBySlug(serviceId);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  return <ServiceDetailLayout service={service} />;
}