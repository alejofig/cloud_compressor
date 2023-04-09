provider "aws" {
  region = "us-east-1"
}

resource "aws_instance" "example" {
  ami           = "ami-0a313d6098716f372"
  instance_type = "t2.micro"
  key_name      = "cloud"
  
  # Asociar dirección IP elástica
  associate_public_ip_address = true

  # Configuración de grupo de seguridad
  vpc_security_group_ids = [aws_security_group.example.id]

  connection {
    type        = "ssh"
    user        = "ubuntu"
    private_key = file("/Users/alejandrofigueroa/Downloads/cloud.pem")
    host        = self.public_ip
    port        = 22

  }

provisioner "remote-exec" {
  inline = [
    "sudo apt upgrade -y",
    "sudo apt update",
    "sudo apt install -y docker.io",
    "sudo systemctl enable docker",
    "sudo usermod -aG docker ubuntu",
    "sudo mkdir -p ~/.docker/cli-plugins/",
    "sudo curl -SL https://github.com/docker/compose/releases/download/v2.3.3/docker-compose-linux-x86_64 -o ~/.docker/cli-plugins/docker-compose",
    "sudo chmod +x ~/.docker/cli-plugins/docker-compose",
    "mkdir app",
    "cd app",
    "git clone -b main https://github.com/alejofig/cloud_compressor.git",
    "cd cloud_compressor",
    "sudo docker compose up -d"
  ]
}

  tags = {
    Name = "cloud-instance"
  }
}

resource "aws_security_group" "example" {
  name_prefix = "example-"
    ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  ingress {
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}
