import {FC, ReactElement} from "react";
import { Card, CardContent, Typography,Button} from "@mui/material";
import IResource from "../../../interfaces/IResource"; 

interface ResourceCardProps {
    resource: IResource;
  }

  const ResourceCard: FC<IResource> = (resource): ReactElement => {
    return (
  <div>
    <Card  style={{ background: resource.color }}>
        <CardContent>
        <Typography variant="h5">{resource.name}</Typography>
        <Typography>{resource.color}</Typography>
        <Typography>{resource.year}</Typography>
        <Typography>{resource.pantone_value}</Typography>
        </CardContent>
    </Card>
     </div>
    );
  };
  export default ResourceCard;