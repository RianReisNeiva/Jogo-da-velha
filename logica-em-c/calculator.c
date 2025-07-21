#include <stdio.h>

char board[3][3];
char player = 'x';

// mostrar tabuleiro
void show()
{
    printf("\n");
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            printf(" %c ", board[i][j]);
            if (j < 2)
            {
                printf("|");
            }
        }
        printf("\n");
        if (i < 2)
            printf("---+---+---\n");
    }
}

// inicia o tabuleiro

void start()
{
    for (int i = 0; i < 3; i++)
    {
        for (int j = 0; j < 3; j++)
        {
            board[i][j] = ' ';
        }
    }
    show();
}

// trocar jogadores
int toReplace(char player)
{
    return (player == 'x') ? 'o' : 'x';
}


// jogada
int toPlay(int l, int c)
{

    if (l < 0 || l > 2 || c < 0 || c > 2)
    {
        printf("Jogada fora do tabuleiro\n");
        return 0;
    }

    if (board[l][c] != ' ')
    {
        printf("\njogada invalida\n");
        return 0;
    }

    board[l][c] = player;
    show();
    player = toReplace(player);
    return 1;
}

// Empate

int draw(){
    for (int i = 0; i < 3; i++){
        for(int j = 0; j < 3; j++){
            if(board[i][j] == ' '){
                return 0;
            }
        }
    }
    printf("Deu velha");
    return 1;
}

// vereficar status
int status()
{
    char last_player = toReplace(player);
    for (int i = 0; i < 3; i++)
    {

        if (board[i][0] == last_player && board[i][1] == last_player && board[i][2] == last_player)
        {
            printf("Jogador (%c) venceu", last_player);
            return 1;
        }

        if (board[0][i] == last_player && board[1][i] == last_player && board[2][i] == last_player)
        {
            printf("Jogador (%c) venceu", last_player);
            return 1;
        }
    }

    if (board[0][0] == last_player && board[1][1] == last_player && board[2][2] == last_player)
    {
        printf("Jogador (%c) venceu", last_player);
        return 1;
    }

    if (board[0][2] == last_player && board[1][1] == last_player && board[2][0] == last_player)
    {
        printf("Jogador (%c) venceu", last_player);
        return 1;
    }
    return 0;
}

int main()
{
    start();
    do
    {
        int line, column;

        printf(" jogador (%c) escolha a linha e a coluna onde deseja jogar\n", player);
        scanf("%d %d", &line, &column);
        toPlay(line, column);

    } while (!status() && !draw());
}