import { Group, Indicator, Text } from "@mantine/core";
import MyPaper from "../common/MyPaper";
import { IconBell, IconPaw } from "@tabler/icons-react";

const statusBarItems = [
  {
    title: "Mascotas totales",
    key: "mascotasTotales",
    count: 50,
    icon: <IconPaw stroke={1} />,
  },
  {
    title: "Mascotas reservadas",
    key: "mascotasReservadas",
    count: 13,
    icon: "",
  },
  {
    title: "Adoptadas",
    key: "mascotasAdoptadas",
    count: 38,
    icon: "",
  },
  {
    title: "Solicitudes pendientes",
    key: "solicitudesPendientes",
    count: 16,
    icon: <IconBell stroke={1} />,
  },
  {
    title: "Animales con problemas",
    key: "animalesConProblemas",
    count: 3,
    icon: "",
  },
];

const StatusBar = () => {
  return (
    <MyPaper
      style={{ backgroundColor: "var(--mantine-color-dark-5)", color: "white" }}
    >
      <Group>
        {statusBarItems.map((item) => {
          return (
            <Group key={item.title}>
              <Text fw={700}>{item.title} :</Text>
              <Indicator inline label={12} size={16}>
                {item.icon}
              </Indicator>

              <Text>{item.count}</Text>
            </Group>
          );
        })}
      </Group>
    </MyPaper>
  );
};

export default StatusBar;
